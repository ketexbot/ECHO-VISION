import { RequestHandler } from "express";
import { 
  UserSettings, 
  CreateUserSettingsSchema, 
  UpdateUserSettingsSchema 
} from "../../shared/types";

const userSettingsStore = new Map<string, UserSettings>();

export const getUserSettings: RequestHandler = (req, res) => {
  const { userId } = req.params;
  
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  const settings = userSettingsStore.get(userId);
  
  if (!settings) {
    return res.status(404).json({ error: "Settings not found for this user" });
  }

  res.json(settings);
};

export const createUserSettings: RequestHandler = (req, res) => {
  const { userId } = req.params;
  
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  const validation = CreateUserSettingsSchema.safeParse(req.body);
  
  if (!validation.success) {
    return res.status(400).json({ 
      error: "Invalid settings data", 
      details: validation.error.errors 
    });
  }

  if (userSettingsStore.has(userId)) {
    return res.status(409).json({ error: "Settings already exist for this user" });
  }

  const now = new Date().toISOString();
  const settings: UserSettings = {
    ...validation.data,
    userId,
    createdAt: now,
    updatedAt: now,
  };

  userSettingsStore.set(userId, settings);
  res.status(201).json(settings);
};

export const updateUserSettings: RequestHandler = (req, res) => {
  const { userId } = req.params;
  
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  const existingSettings = userSettingsStore.get(userId);
  
  if (!existingSettings) {
    return res.status(404).json({ error: "Settings not found for this user" });
  }

  const validation = UpdateUserSettingsSchema.safeParse(req.body);
  
  if (!validation.success) {
    return res.status(400).json({ 
      error: "Invalid settings data", 
      details: validation.error.errors 
    });
  }

  const updatedSettings: UserSettings = {
    ...existingSettings,
    ...validation.data,
    updatedAt: new Date().toISOString(),
  };

  userSettingsStore.set(userId, updatedSettings);
  res.json(updatedSettings);
};

export const deleteUserSettings: RequestHandler = (req, res) => {
  const { userId } = req.params;
  
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  const deleted = userSettingsStore.delete(userId);
  
  if (!deleted) {
    return res.status(404).json({ error: "Settings not found for this user" });
  }

  res.status(204).send();
};
