export interface WorkingParams {
    cli: CliParams;
    scaffoldDir: string;
}

export interface CliParams {
    workingDir: string;
    packageName: string;
    sourcePackageName: string;
}