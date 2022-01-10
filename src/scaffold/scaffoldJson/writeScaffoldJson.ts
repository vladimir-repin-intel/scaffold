import { WorkingParams } from "../../params";
import { ScaffoldInfo } from "./scaffoldIfo.type";
import fse from "fs-extra";
import path from "path";

export async function writeScaffoldJson(sourcePackage: string, params: WorkingParams): Promise<void> {
  const info: ScaffoldInfo = {
    sourcePackage
  };
  const destFile = path.join(params.cli.workingDir, "scaffold.json");
  await fse.writeFile(destFile, JSON.stringify(info), "utf-8");
}