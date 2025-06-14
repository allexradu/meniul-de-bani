import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      quotes: ["error", "single"],
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": [
        "error",
        {
          semi: false,
          singleQuote: true,
          useTabs: false,
          tabWidth: 4,
        },
      ],
      "sort-imports": "off",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "react/no-unescaped-entities": [
        "error",
        {
          forbid: [
            {
              char: '"',
              alternatives: ["&quot;", "&ldquo;", "&#34;", "&rdquo;"],
            },
            {
              char: "'",
              alternatives: ["&apos;", "&lsquo;", "&#39;", "&rsquo;"],
            },
          ],
        },
      ],
    },
  },
];
