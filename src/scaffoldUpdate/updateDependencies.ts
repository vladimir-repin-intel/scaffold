import { spawnIt } from "@b08/spawn";
import { WorkingParams } from "../params";

export async function updateDependencies(deps: string[], params: WorkingParams): Promise<void> {
  //todo  split dev and regular deps
  await spawnIt("npm", ["install", "-S", ...deps], { cwd: params.cli.workingDir });
}
