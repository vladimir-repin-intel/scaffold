import { spawnIt } from "@b08/spawn";
import fse from "fs-extra";

export async function installPackage(packageName: string, scaffoldDir: string): Promise<void> {
    console.log(`installing package ${packageName} to ${scaffoldDir}`);
    await fse.ensureDir(scaffoldDir);
    await spawnIt("npm", ["install", packageName], { cwd: scaffoldDir });
}

