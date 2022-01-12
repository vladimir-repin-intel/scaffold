import globby from "globby";
import path from "path";
import { WorkingParams } from "../params";
import { copyFile } from "./copyFile";
import { getTemplatePath } from "./getPkgPath";
import { normalize } from "./normalize";

export async function copyFiles(pkgName: string, params: WorkingParams): Promise<void> {
  const fromPath = normalize(getTemplatePath(pkgName, params));
  const toPath = normalize(params.cli.workingDir);
  const templateSearch = normalize(path.join(fromPath, "**/*"));
  const files = await globby(templateSearch, { dot: true });  
  await Promise.all(files.map(file => copyFile(file, fromPath, toPath, params)));
}

