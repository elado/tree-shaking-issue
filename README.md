# tree-shaking-issue

```
cd pkg1 && yarn && yarn build && yarn link && cd ..
cd app1 && yarn link pkg1 && yarn && yarn build && cd ..
code app1/dist/main.js
```
