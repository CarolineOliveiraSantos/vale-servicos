import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: { "scope-enum": [2, "always", ["backend", "mobile", "root"]] },
  prompt: {
    questions: {
      scope: {
        enum: {
          backend: {},
          mobile: {},
        },
      },
    },
  },
};
export default config;
