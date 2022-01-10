import { getParams } from "../params/getParams";
import { installPackage } from "../parts";

export async function scaffoldInstall(): Promise<void> {
    const params = getParams();
    console.log("scaffold install", params.cli.packageName);
    await installPackage(params.cli.packageName, params.scaffoldDir);
}

scaffoldInstall()
    .catch(err => {
        console.error("Error installing template ", err);
    })