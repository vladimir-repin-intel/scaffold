import simpleGit from "simple-git";
import fse from "fs-extra";
import { WorkingParams } from "../../params";

export async function copyPackageJson(file: string, destination: string, params: WorkingParams): Promise<void> {
  const git = simpleGit(params.cli.workingDir);
  const result = await git.remote(["get-url", "origin"]) as string;
  const remote = result.replace(/\s+/g, "");
  const content = await fse.readFile(file, "utf-8");
  const json = JSON.parse(content);
  json.name = params.cli.packageName;
  json.repository.url = remote;
  await fse.writeFile(destination, JSON.stringify(json, null, 2), "utf-8");
}
