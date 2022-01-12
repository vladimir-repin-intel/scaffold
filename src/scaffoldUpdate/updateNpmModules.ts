import { WorkingParams } from "../params";
import { getTemplatePath } from "../scaffold/getPkgPath";
import { getPackageJson } from "../scaffold/template/getPackageList";
import { getDependenciesToUpdate } from "./getDependenciesToUpdate";
import { updateDependencies } from "./updateDependencies";

export async function updateNpmModules(sourcePackage: string, params: WorkingParams): Promise<void> {
  const templatePath = await getTemplatePath(sourcePackage, params);
  const templatePackagesJson = await getPackageJson(templatePath);
  const currentPackageJson = await getPackageJson(params.cli.workingDir);
  const dependenciesToUpdate = [
    ...getDependenciesToUpdate(templatePackagesJson.dependencies, currentPackageJson.dependencies),
    ...getDependenciesToUpdate(templatePackagesJson.devDependencies, currentPackageJson.devDependencies)
  ];

  await updateDependencies(dependenciesToUpdate);
}
