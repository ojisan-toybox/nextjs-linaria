# nextjs-linaria

```
npm i

npx next build

npx next export
```

## 開発中に遭遇した Error

- Error: Using the "css" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly.
  - client に css を入れたときのエラー
- Error: Cannot find module '@babel/core'
  - babel の設定(next/babel, linaria/babel)を足したときのエラー
  - @babel/core を足すと動くけどスタイルはたされない
