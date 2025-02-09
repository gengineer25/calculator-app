// .eslintrc.js
module.exports = {
  root: true, // プロジェクトのルートディレクトリであることを示す
  parser: "@typescript-eslint/parser", // TypeScript パーサーを指定
  parserOptions: {
    project: "./tsconfig.json", // TypeScript 設定ファイルへのパス
    ecmaFeatures: {
      jsx: true, // JSX を許可
    },
    ecmaVersion: "latest", // 最新の ECMAScript バージョンをサポート
    sourceType: "module", // ES Modules を使用
  },
  plugins: [
    "react", // React プラグイン
    "react-hooks", // React Hooks プラグイン
    "jsx-a11y", // アクセシビリティプラグイン
    "@typescript-eslint", // TypeScript プラグイン
    "prettier", //Prettier
  ],
  extends: [
    "next/core-web-vitals", // Next.js 推奨ルール (Core Web Vitals)
    "eslint:recommended", // ESLint 推奨ルール
    "plugin:@typescript-eslint/recommended", // TypeScript 推奨ルール
    "plugin:react/recommended", // React 推奨ルール
    "plugin:react-hooks/recommended", // React Hooks 推奨ルール
    "plugin:jsx-a11y/recommended", // アクセシビリティ推奨ルール
    "prettier", // Prettier と競合するルールを無効化 (最後に記述)
    // 'plugin:prettier/recommended', // これはprettierをeslintのルールとして実行する。あまり推奨されない。
  ],
  settings: {
    react: {
      version: "detect", // React のバージョンを自動検出
    },
  },
  rules: {
    // 個別のルール設定 (必要に応じて追加・変更)
    "react/react-in-jsx-scope": "off", // React 17 以降では不要
    "react/prop-types": "off", // TypeScript を使う場合は不要
    "@typescript-eslint/explicit-function-return-type": "off", // 関数の戻り値の型を明示的に書かなくても良い
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // 未使用変数は警告 (引数名が _ で始まる場合は無視)
    "@typescript-eslint/consistent-type-imports": "warn", // 型のインポートは `import type` を推奨
    "react/no-unknown-property": ["error", { ignore: ["css"] }], // emotionなどのcss propを使う場合
    "no-console": "warn", // console.log は警告
  },
  ignorePatterns: [
    "node_modules/",
    ".next/",
    "out/",
    "public/",
    "*.js", // JavaScript ファイルは除外 (TypeScript のみ)
  ],
};
