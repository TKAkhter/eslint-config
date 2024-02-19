module.exports = {
  ignorePatterns: [".eslintrc.js"],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    // Unicorn rules
    "plugin:unicorn/recommended",
    // ESLint recommendations
    "eslint:recommended",
    // TypeScript rules
    "plugin:@typescript-eslint/recommended",
    // AirBNB rules,
    "airbnb",
    // AirBNB TypeScript rules,
    "airbnb-typescript",
    // AirBNB React Hook rules,
    "airbnb/hooks",
    // React rules,
    "plugin:react/recommended",
    // React hooks rules,
    "plugin:react-hooks/recommended",
    // Accessibility rules
    "plugin:jsx-a11y/recommended",
    // Jest test rules
    "plugin:jest/recommended",
    // Jest test rules
    "plugin:testing-library/react",
    // NextJS rules,
    "plugin:@next/next/recommended",
    // Overrides some ESLint rules that conflict with Prettier,
    "prettier",
    // Enables eslint-plugin-prettier and eslint-config-prettier.,
    "plugin:prettier/recommended"
  ],
  plugins: [
    "react",
    "testing-library",
    "import",
    "prettier",
    "file-progress",
    "unicorn"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: 'tsconfig.json',
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    "jest/expect-expect": "off",
    "file-progress/activate": 1,
    "import/order": [
      "error",
      {
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "groups": [
          "builtin",
          "external",
          "internal",
          "index",
          "parent",
          "sibling",
          "object",
          "type"
        ],
        "newlines-between": "always",
        "pathGroupsExcludedImportTypes": [
          "builtin"
        ]
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/__tests__/**/*.*",
          "**/.storybook/**/*.*",
          "**/jest.setup.js",
          "**/*.stories.*",
          "**/*.test.*"
        ],
        "peerDependencies": true
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    // Importing React is obsolete when using Next.js
    "react/jsx-props-no-spreading": "off",
    "react/forbid-prop-types": "off",
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function"
      }
    ],
    // defaultProps rule to be deprecated on function components
    // https://github.com/reactjs/rfcs/pull/107
    "react/require-default-props": [
      "off",
      {
        "ignoreFunctionalComponents": true
      }
    ],
    "unicorn/no-array-callback-reference": "off",
    // used for type guards
    "unicorn/no-array-for-each": "off",
    // follow AirBnB style
    "unicorn/no-array-reduce": "off",
    "unicorn/no-null": "off",
    // not apprioprirate in JSX
    "unicorn/prefer-spread": "off",
    "unicorn/prevent-abbreviations": "off"
  },
  overrides: [
    {
      "files": [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)"
      ],
      "extends": [
        "plugin:testing-library/react"
      ]
    },
    {
      "files": [
        "cypress.config.ts",
        "./cypress/**/*.ts"
      ],
      "parserOptions": {
        "project": [
          "./cypress/tsconfig.json"
        ]
      }
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "no-undef": "off"
      }
    }
  ]
};
