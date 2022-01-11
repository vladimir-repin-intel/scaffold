import { WorkingParams } from "../../params";
import path from "path";

export function getPackagePath(pkgName: string, params: WorkingParams): string {
  return path.join(params.scaffoldDir, "node_modules", pkgName);
}