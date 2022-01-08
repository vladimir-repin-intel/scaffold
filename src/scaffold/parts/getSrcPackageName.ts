import { WorkingParams } from "../../params";
import { getTemplateInfos } from "../template/getTemplateInfos";

export async function getSrcPackageName(params: WorkingParams): Promise<string> {
  const templates = await getTemplateInfos(params);
  const template = templates
    .find(t => t.name === params.cli.sourcePackageName || t.alias === params.cli.sourcePackageName);
  return template?.name;
}

