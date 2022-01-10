import { getParams } from "../params";
import { npmInstall } from "./npmInstall";
import { acquirePackage } from "./parts/acquirePackage";
import { copyFiles } from "./parts/copyFiles";
import { writeScaffoldJson } from "./scaffoldJson/writeScaffoldJson";

export async function scaffold(): Promise<void> {
  const params = getParams();
  if (params.cli.sourcePackageName == null || params.cli.packageName == null) {
    throw new Error("pkg name and source are require, syntax: scaffold <pkg> --from <src>");
  }
  const srcPackage = await acquirePackage(params);
  console.log(`copying files from ${srcPackage}, for package ${params.cli.packageName}`);
  await copyFiles(srcPackage, params);
  console.log(`copying files finished`);
  await npmInstall(params);
  await writeScaffoldJson(srcPackage, params);
}


scaffold()
  .catch(err => {
    console.error("Error scaffolding ", err);
  })


