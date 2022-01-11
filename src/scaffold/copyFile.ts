import fse from "fs-extra";
import { WorkingParams } from "../../params";
import { copyPackageJson } from "./copyPackageJson";

export async function copyFile(file: string, fromPath: string, toPath: string, params: WorkingParams): Promise<void> {
  const dest = file.replace(fromPath, toPath);
  await ensureSubDir(dest);
  if (isPackageJson(file, fromPath)) { return await copyPackageJson(file, dest, params);}
  if (isReadme(file, fromPath)) { return await createReadmeFile(dest, params); }
  await fse.copyFile(file, dest);
}

async function ensureSubDir(path: string): Promise<void> {
  const index = path.lastIndexOf("/");
  const dir = path.substring(0, index);
  await fse.ensureDir(dir);
}

async function createReadmeFile(path: string, params: WorkingParams): Promise<void> {
  const readmeContent = `# ${params.cli.packageName}\n`;
  await fse.writeFile(path, readmeContent, "utf-8");
}


function isPackageJson(file: string, fromPath: string): boolean {
  return file.replace(fromPath, "").replace("/", "") === "package.json";
}

function isReadme(file: string, fromPath: string): boolean {
  return file.replace(fromPath, "").replace("/", "").toLowerCase() === "readme.md";
}