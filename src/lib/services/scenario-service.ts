import { db } from "../db";
import type { Scenario, UserScenario, ScenarioCategory } from "../types";

let scenariosCache: Scenario[] | null = null;

async function loadScenarios(): Promise<Scenario[]> {
  if (scenariosCache) return scenariosCache;
  const { scenariosData } = await import("../../data/scenarios");
  scenariosCache = scenariosData;
  return scenariosData;
}

export const scenarioService = {
  async getAll(): Promise<Scenario[]> {
    return loadScenarios();
  },

  async getById(id: string): Promise<Scenario | undefined> {
    const data = await loadScenarios();
    return data.find((s) => s.id === id);
  },

  async getByCategory(category: ScenarioCategory): Promise<Scenario[]> {
    const data = await loadScenarios();
    return data.filter((s) => s.category === category);
  },

  async markCompleted(
    scenarioId: string,
    mistakeCount: number
  ): Promise<void> {
    await db.userScenarios.put({
      scenarioId,
      completedAt: new Date().toISOString(),
      mistakeCount,
    });
  },

  async getAllCompleted(): Promise<Record<string, UserScenario>> {
    const all = await db.userScenarios.toArray();
    const map: Record<string, UserScenario> = {};
    for (const s of all) map[s.scenarioId] = s;
    return map;
  },
};
