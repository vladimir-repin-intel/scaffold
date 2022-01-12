import globby from "globby";
import { WorkingParams } from "../params";
import { normalize } from "../scaffold/normalize";
import path from "path";
import fse from "fs-extra";

export async function deleteFiles(patterns: string[], params: WorkingParams): Promise<void> {
  const globs = patterns.map(f => normalize(path.join(params.cli.workingDir, f)));
  const files = await globby(globs, { dot: true });
  await deleteFilesList(files);
}

async function deleteFilesList(files: string[]): Promise<void> {
  await Promise.all(files.map(f => fse.unlink(f)));
}
