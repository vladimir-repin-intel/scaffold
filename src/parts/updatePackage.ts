import fse from "fs-extra";
import { spawnIt } from "@b08/spawn";

export async function updatePackage(packageName: string, scaffoldDir: string): Promise<void> {
  console.log(`updating package ${packageName}`);
  await fse.ensureDir(scaffoldDir);
  await spawnIt("npm", ["install", `${packageName}@latest`, "-S"], { cwd: scaffoldDir });
}