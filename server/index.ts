import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  getUserSettings,
  createUserSettings,
  updateUserSettings,
  deleteUserSettings,
} from "./routes/settings";
import {
  createSession,
  getSession,
  getUserSessions,
  endSession,
  recordProximityDetection,
  getSessionDetections,
} from "./routes/sessions";
import {
  getUserAnalytics,
  getGlobalStats,
  getSessionStats,
} from "./routes/analytics";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping pong";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // User Settings routes
  app.get("/api/settings/:userId", getUserSettings);
  app.post("/api/settings/:userId", createUserSettings);
  app.patch("/api/settings/:userId", updateUserSettings);
  app.delete("/api/settings/:userId", deleteUserSettings);

  // Session routes
  app.post("/api/sessions", createSession);
  app.get("/api/sessions/:sessionId", getSession);
  app.get("/api/users/:userId/sessions", getUserSessions);
  app.post("/api/sessions/:sessionId/end", endSession);
  app.post("/api/sessions/:sessionId/detections", recordProximityDetection);
  app.get("/api/sessions/:sessionId/detections", getSessionDetections);

  // Analytics routes
  app.get("/api/analytics/users/:userId", getUserAnalytics);
  app.get("/api/analytics/global", getGlobalStats);
  app.get("/api/analytics/sessions/:sessionId", getSessionStats);

  return app;
}
