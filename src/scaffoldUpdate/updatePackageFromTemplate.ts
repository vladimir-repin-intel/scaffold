import { WorkingParams } from "../params";
import { ScaffoldInfo } from "../scaffold/scaffoldJson/scaffoldIfo.type";
import { getTemplateInfos } from "../scaffold/template/getTemplateInfos";
import { deleteFiles } from "./deleteFiles";
import { updateFiles } from "./updateFiles";
import { updateNpmModules } from "./updateNpmModules";

export async function updatePackageFromTemplate(info: ScaffoldInfo, params: WorkingParams): Promise<void> {
  const templates = await getTemplateInfos(params);
  const template = templates.find(t => t.name === info.sourcePackage);

  await deleteFiles(template.update.patternsForDelete, params);
  await updateFiles(info.sourcePackage, template.update.patternsForDelete, params);
  await updateNpmModules(info.sourcePackage, params);
}
