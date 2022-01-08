import { getParams } from "../params";
import { acquirePackage } from "./acquirePackage";

export async function scaffold(): Promise<void> {
  const params = getParams();
  if (params.cli.sourcePackageName == null || params.cli.packageName == null) {
    throw new Error("pkg name and source are require, syntax: scaffold <pkg> --from <src>");
  }
  const srcPackage = await acquirePackage(params);
  console.log(`pkg ${srcPackage} ready`);
  // await copyFiles(srcPackage, params);
  // await npmInstall();
}

scaffold()
  .catch(err => {
    console.error("Error scaffolding ", err);
  })


