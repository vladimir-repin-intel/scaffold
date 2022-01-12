export interface TemplateInfo {
  name: string;
  alias: string;
  update: UpdateRules;
}

export interface UpdateRules {
  // globs
  patternsForUpdate: string[];
  patternsForDelete: string[];
}