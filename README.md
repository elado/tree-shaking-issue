# tree-shaking-issue

```
cd pkg1 && yarn && yarn build && yarn link && cd ..
cd app1 && yarn link pkg1 && yarn && yarn build && cd ..
code app1/dist/main.js
```


Comment `Qux.displayName` line in [`pkg1/src/Qux.js`](pkg1/src/Qux.js) and Qux won't be included in app `dist/main.js`
