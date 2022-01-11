import { WorkingParams } from "../../params";
import fse from "fs-extra";
import path from "path";

export async function getPackageList(params: WorkingParams): Promise<string[]> {
  const file = path.join(params.scaffoldDir, "package.json");
  const fileContents = await fse.readFile(file, "utf-8");
  const pojo = JSON.parse(fileContents);
  return Object.keys(pojo.dependencies);
}
