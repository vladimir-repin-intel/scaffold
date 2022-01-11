import { spawnIt } from "@b08/spawn";
import { WorkingParams } from "../params";

export async function npmInstall(params: WorkingParams): Promise<void> {
  await spawnIt("npm", ['i'], {cwd: params.cli.workingDir} );
}
