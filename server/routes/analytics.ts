import { RequestHandler } from "express";
import { AnalyticsData, IntensityMode } from "../../shared/types";

export const getUserAnalytics: RequestHandler = (req, res) => {
  const { userId } = req.params;
  
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  const mockAnalytics: AnalyticsData = {
    userId,
    totalSessions: 42,
    totalDuration: 12600,
    totalDetections: 384,
    avgSessionDuration: 300,
    mostUsedMode: "balanced" as IntensityMode,
    avgBubbleRadius: 1.5,
  };

  res.json(mockAnalytics);
};

export const getGlobalStats: RequestHandler = (_req, res) => {
  const globalStats = {
    totalUsers: 1250,
    totalSessions: 15840,
    totalDetections: 234567,
    avgBubbleRadius: 1.8,
    modeDistribution: {
      quiet: 28,
      balanced: 54,
      alert: 18,
    },
    topUsageHours: [8, 9, 17, 18, 19],
  };

  res.json(globalStats);
};

export const getSessionStats: RequestHandler = (req, res) => {
  const { sessionId } = req.params;
  
  if (!sessionId) {
    return res.status(400).json({ error: "Session ID is required" });
  }

  const sessionStats = {
    sessionId,
    duration: 320,
    detections: 24,
    avgProximity: 1.2,
    peakProximity: 0.5,
    detectionsByType: {
      person: 18,
      obstacle: 4,
      vehicle: 2,
      unknown: 0,
    },
    proximityDistribution: {
      "0-0.5m": 2,
      "0.5-1.0m": 8,
      "1.0-1.5m": 10,
      "1.5-2.0m": 4,
    },
  };

  res.json(sessionStats);
};
