import { WorkingParams } from "../../params";
import { getPackageList } from "./getPackageList";
import { TemplateInfo } from "./templateInfo.type";
import path from "path";
import fse from "fs-extra";

export async function getTemplateInfos(params: WorkingParams): Promise<TemplateInfo[]> {
  const pkgs = await getPackageList(params);
  const templates = await Promise.all(pkgs.map(p => getTemplateInfo(p, params)));
  return templates.filter(f => f != null);
}

async function getTemplateInfo(pkgName: string, params: WorkingParams): Promise<TemplateInfo> {
  const filePath = path.join(params.scaffoldDir, "node_modules", pkgName, "template.json");
  if (!fse.existsSync(filePath)) { return null; }
  const fileContent = await fse.readFile(filePath, "utf-8");
  const info = JSON.parse(fileContent);
  return { ...info, name: pkgName };
}
