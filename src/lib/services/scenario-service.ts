import { db } from "../db";
import type { Scenario, UserScenario, ScenarioCategory } from "../types";
import { scenariosData } from "../../data/scenarios";

export const scenarioService = {
  getAll(): Scenario[] {
    return scenariosData;
  },

  getById(id: string): Scenario | undefined {
    return scenariosData.find((s) => s.id === id);
  },

  getByCategory(category: ScenarioCategory): Scenario[] {
    return scenariosData.filter((s) => s.category === category);
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
