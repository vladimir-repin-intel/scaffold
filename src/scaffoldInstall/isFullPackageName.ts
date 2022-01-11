export const pkgRegex = /@[^\/]+\/[^\/]+/;

export function isFullPackageName(packageName: string): boolean {
  return packageName.match(pkgRegex) != null;
}
