import { getParams } from "../params";
import { readScaffoldInfo } from "../scaffold/scaffoldJson/readScaffoldInfo";
import { updateNpmPackage } from "../scaffoldInstall/updatePackage";
import { updatePackageFromTemplate } from "./updatePackageFromTemplate";

export async function scaffoldUpdate(): Promise<void> {
  const params = getParams();
  const scaffoldInfo = await readScaffoldInfo(params);
  console.log(`Updating source template: ${scaffoldInfo.sourcePackage}`);
  await updateNpmPackage(scaffoldInfo.sourcePackage, params.scaffoldDir);
  await updatePackageFromTemplate(params);
}

scaffoldUpdate()
  .catch(err => {
    console.error("Error updating from template ", err);
  });
