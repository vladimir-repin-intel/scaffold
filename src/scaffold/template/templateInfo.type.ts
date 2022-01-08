export interface TemplateInfo {
  name: string;
  alias: string;
  update: UpdateRules;
}

export interface UpdateRules {
  // search globs
  filesToUpdate: string[];
  filesToDelete: string[];
}