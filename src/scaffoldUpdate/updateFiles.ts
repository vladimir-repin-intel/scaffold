import globby from "globby";
import path from "path";
import { WorkingParams } from "../params";
import { copyFile } from "../scaffold/copyFile";
import { getTemplatePath } from "../scaffold/getPkgPath";
import { normalize } from "../scaffold/normalize";

export async function updateFiles(pkgName: string, patterns: string[], params: WorkingParams): Promise<void> {
  const fromPath = normalize(getTemplatePath(pkgName, params));
  const toPath = normalize(params.cli.workingDir);
  const globs = patterns.map(f => normalize(path.join(fromPath, f)));  
  const files = await globby(globs, { dot: true });  
  await Promise.all(files.map(file => copyFile(file, fromPath, toPath, params)));
}
