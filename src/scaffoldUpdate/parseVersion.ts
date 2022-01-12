
const versionRegex = /^?(\d+)\.(\d+)\.(\d+)(.*)$/

export interface Version {
  major: number;
  minor: number;
  patch: number;
  patchSuffix: string;
}

export function parseVersion(currentVersion: string): Version {
  const match = currentVersion.match(versionRegex);
  return {
    major: +match[1],
    minor: +match[2],
    patch: +match[3],
    patchSuffix: match[4]
  };
}