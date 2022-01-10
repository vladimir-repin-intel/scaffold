import { WorkingParams } from "../params";
import { spawnIt } from "@b08/spawn";

export async function npmInstall(params: WorkingParams): Promise<void> {
  await spawnIt("npm", ['i'], {cwd: params.cli.workingDir} );
}
