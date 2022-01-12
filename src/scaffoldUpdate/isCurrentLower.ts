import { parseVersion } from "./parseVersion";

export function isCurrentLower(currentVersion: string, templateVersion: string): boolean {
  if (currentVersion == null) {
    return true;
  }
  const current = parseVersion(currentVersion);
  const template = parseVersion(templateVersion);
  if (current.major < template.major) { return true; }
  if (current.major > template.major) { return false; }
  if (current.minor < template.minor) { return true; }
  if (current.minor > template.minor) { return false; }
  if (current.patch < template.patch) { return true; }
  if (current.patch > template.patch) { return false; }
  if (template.patch == null && current.patch == null) { return false; }
  if (template.patch == null && current.patch != null) { return true; }
  if (template.patch != null && current.patch == null) { return false; }
  return true;
}
