import { WorkingParams } from "../../params";
import fse from "fs-extra";
import path from "path";

export async function getScaffoldPackageList(params: WorkingParams): Promise<string[]> {
  const pojo = await getPackageJson(params.scaffoldDir);
  return Object.keys(pojo.dependencies);
}

export async function getPackageJson(folder: string): Promise<any> {
  const file = path.join(folder, "package.json");
  const fileContents = await fse.readFile(file, "utf-8");
  const pojo = JSON.parse(fileContents);
  return pojo;
}
