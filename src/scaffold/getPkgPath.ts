import path from "path";
import { WorkingParams } from "../params";

export function getPackagePath(pkgName: string, params: WorkingParams): string {
  return path.join(params.scaffoldDir, "node_modules", pkgName);
}

export function getTemplatePath(pkgName: string, params: WorkingParams): string {
  return path.join(getPackagePath(pkgName, params), "template");
}
