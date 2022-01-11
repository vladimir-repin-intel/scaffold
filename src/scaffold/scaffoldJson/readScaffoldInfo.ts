import path from "path";
import fse from "fs-extra";
import { WorkingParams } from "../../params";
import { ScaffoldInfo } from "./scaffoldIfo.type";

export async function readScaffoldInfo(params: WorkingParams): Promise<ScaffoldInfo> {
  const filePath = path.join(params.cli.workingDir, "scaffold.json");
  const content = await fse.readFile(filePath, "utf-8");
  const info: ScaffoldInfo = JSON.parse(content);
  return info;
}