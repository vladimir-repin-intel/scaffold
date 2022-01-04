import { WorkingParams } from "../../params";

export async function getSrcPackageName(params: WorkingParams): Promise<string> {
  const pkg = await readPkgJson(params);
}

