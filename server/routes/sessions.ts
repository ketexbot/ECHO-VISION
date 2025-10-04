import { RequestHandler } from "express";
import { 
  SessionData, 
  CreateSessionSchema,
  ProximityDetection,
  ProximityDetectionSchema
} from "../../shared/types";

const sessionsStore = new Map<string, SessionData>();
const proximityStore = new Map<string, ProximityDetection[]>();

function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export const createSession: RequestHandler = (req, res) => {
  const validation = CreateSessionSchema.safeParse(req.body);
  
  if (!validation.success) {
    return res.status(400).json({ 
      error: "Invalid session data", 
      details: validation.error.errors 
    });
  }

  const sessionId = generateSessionId();
  const session: SessionData = {
    ...validation.data,
    sessionId,
    detectionCount: 0,
  };

  sessionsStore.set(sessionId, session);
  proximityStore.set(sessionId, []);
  
  res.status(201).json(session);
};

export const getSession: RequestHandler = (req, res) => {
  const { sessionId } = req.params;
  
  if (!sessionId) {
    return res.status(400).json({ error: "Session ID is required" });
  }

  const session = sessionsStore.get(sessionId);
  
  if (!session) {
    return res.status(404).json({ error: "Session not found" });
  }

  res.json(session);
};

export const getUserSessions: RequestHandler = (req, res) => {
  const { userId } = req.params;
  
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  const userSessions = Array.from(sessionsStore.values()).filter(
    session => session.userId === userId
  );

  res.json({ 
    userId, 
    sessions: userSessions,
    total: userSessions.length 
  });
};

export const endSession: RequestHandler = (req, res) => {
  const { sessionId } = req.params;
  
  if (!sessionId) {
    return res.status(400).json({ error: "Session ID is required" });
  }

  const session = sessionsStore.get(sessionId);
  
  if (!session) {
    return res.status(404).json({ error: "Session not found" });
  }

  if (session.endTime) {
    return res.status(400).json({ error: "Session already ended" });
  }

  const endTime = new Date().toISOString();
  const startTime = new Date(session.startTime);
  const duration = Math.floor((new Date(endTime).getTime() - startTime.getTime()) / 1000);

  const detections = proximityStore.get(sessionId) || [];
  const avgProximity = detections.length > 0
    ? detections.reduce((sum, d) => sum + d.distance, 0) / detections.length
    : undefined;
  const peakProximity = detections.length > 0
    ? Math.min(...detections.map(d => d.distance))
    : undefined;

  const updatedSession: SessionData = {
    ...session,
    endTime,
    duration,
    detectionCount: detections.length,
    avgProximity,
    peakProximity,
  };

  sessionsStore.set(sessionId, updatedSession);
  res.json(updatedSession);
};

export const recordProximityDetection: RequestHandler = (req, res) => {
  const { sessionId } = req.params;
  
  if (!sessionId) {
    return res.status(400).json({ error: "Session ID is required" });
  }

  const session = sessionsStore.get(sessionId);
  
  if (!session) {
    return res.status(404).json({ error: "Session not found" });
  }

  if (session.endTime) {
    return res.status(400).json({ error: "Cannot add detections to ended session" });
  }

  const validation = ProximityDetectionSchema.safeParse({
    ...req.body,
    sessionId,
    timestamp: req.body.timestamp || new Date().toISOString(),
  });
  
  if (!validation.success) {
    return res.status(400).json({ 
      error: "Invalid detection data", 
      details: validation.error.errors 
    });
  }

  const detections = proximityStore.get(sessionId) || [];
  detections.push(validation.data);
  proximityStore.set(sessionId, detections);

  const updatedSession: SessionData = {
    ...session,
    detectionCount: detections.length,
  };
  sessionsStore.set(sessionId, updatedSession);

  res.status(201).json(validation.data);
};

export const getSessionDetections: RequestHandler = (req, res) => {
  const { sessionId } = req.params;
  
  if (!sessionId) {
    return res.status(400).json({ error: "Session ID is required" });
  }

  const session = sessionsStore.get(sessionId);
  
  if (!session) {
    return res.status(404).json({ error: "Session not found" });
  }

  const detections = proximityStore.get(sessionId) || [];

  res.json({
    sessionId,
    detections,
    total: detections.length,
  });
};
