import { z } from "zod";

export const IntensityModeSchema = z.enum(["quiet", "balanced", "alert"]);
export type IntensityMode = z.infer<typeof IntensityModeSchema>;

export const UserSettingsSchema = z.object({
  userId: z.string(),
  bubbleRadius: z.number().min(0.5).max(5.0),
  intensityMode: IntensityModeSchema,
  hapticEnabled: z.boolean().default(true),
  soundEnabled: z.boolean().default(false),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});

export type UserSettings = z.infer<typeof UserSettingsSchema>;

export const CreateUserSettingsSchema = UserSettingsSchema.omit({
  userId: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateUserSettingsSchema = CreateUserSettingsSchema.partial();

export const SessionDataSchema = z.object({
  sessionId: z.string(),
  userId: z.string(),
  startTime: z.string().datetime(),
  endTime: z.string().datetime().optional(),
  duration: z.number().optional(),
  detectionCount: z.number().default(0),
  avgProximity: z.number().optional(),
  peakProximity: z.number().optional(),
});

export type SessionData = z.infer<typeof SessionDataSchema>;

export const CreateSessionSchema = SessionDataSchema.omit({
  sessionId: true,
  duration: true,
  detectionCount: true,
  avgProximity: true,
  peakProximity: true,
});

export const ProximityDetectionSchema = z.object({
  sessionId: z.string(),
  timestamp: z.string().datetime(),
  distance: z.number().min(0),
  angle: z.number().min(0).max(360),
  objectType: z.enum(["person", "obstacle", "vehicle", "unknown"]).default("unknown"),
});

export type ProximityDetection = z.infer<typeof ProximityDetectionSchema>;

export const AnalyticsDataSchema = z.object({
  userId: z.string(),
  totalSessions: z.number(),
  totalDuration: z.number(),
  totalDetections: z.number(),
  avgSessionDuration: z.number(),
  mostUsedMode: IntensityModeSchema,
  avgBubbleRadius: z.number(),
});

export type AnalyticsData = z.infer<typeof AnalyticsDataSchema>;
