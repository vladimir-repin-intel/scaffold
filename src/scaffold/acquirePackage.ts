import { WorkingParams } from "../params";
import { installPackage } from "../scaffoldInstall/installPackage";
import { updateNpmPackage } from "../scaffoldInstall/updatePackage";
import { getSrcPackageName } from "./getSrcPackageName";

export async function acquirePackage(params: WorkingParams): Promise<string> {
  const srcPackage = await getSrcPackageName(params);
  if (srcPackage == null) {
    await installPackage(params.cli.sourcePackageName, params.scaffoldDir);
    return params.cli.sourcePackageName;
  }

  await updateNpmPackage(srcPackage, params.scaffoldDir);
  return srcPackage;
}
