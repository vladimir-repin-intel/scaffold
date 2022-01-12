import { isCurrentLower } from "./isCurrentLower";
import { parseVersion } from "./parseVersion";

export function getDependenciesToUpdate(templateDeps: any, currentDeps: any): string[] {
  const result = Object.keys(templateDeps)
    .map(pkgName => createDependencyUpdateString(pkgName, templateDeps[pkgName], currentDeps[pkgName]))
  return result.filter(x => x != null);
}

function createDependencyUpdateString(pkgName: string, templateVersion: string, currentVersion: string): string {
  if (!isCurrentLower(currentVersion, templateVersion)) { return null; }

  return templateVersion.startsWith("^")
    ? `${pkgName}@${parseVersion(templateVersion).major}`
    : `${pkgName}@${templateVersion}`;
}

