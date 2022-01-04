import { WorkingParams } from "../params";
import { installPackage, updatePackage } from "../parts";
import { getSrcPackageName } from "./parts/getSrcPackageName";

export async function acquirePackage(params: WorkingParams): Promise<string> {
  const srcPackage = await getSrcPackageName(params);
  if (srcPackage == null) {
    await installPackage(params.cli.sourcePackageName, params.scaffoldDir);
    return params.cli.sourcePackageName;
  }

  await updatePackage(srcPackage, params.scaffoldDir);
  return srcPackage;
}
