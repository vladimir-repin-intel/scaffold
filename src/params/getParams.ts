import { CliParams, WorkingParams } from "./WorkingParams.type";
import os from "os";
import path from "path";
import yargs from "yargs/yargs";

const argv: any = yargs(process.argv).argv;

export function getParams(): WorkingParams {
    const scaffoldDir = path.join(os.homedir(), "vlr2_scaffold");
    return {
        cli: getCliParams(),
        scaffoldDir
    }
}

function getCliParams(): CliParams {    
    const packageName = argv._[argv._.length - 1];
    
    const wd = argv.wd ?? process.cwd();
    return {
        workingDir: wd,
        sourcePackageName: argv.from,
        packageName
    };
}
