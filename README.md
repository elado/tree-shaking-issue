# tree-shaking-issue

```
pushd pkg1 && yarn && yarn build && yarn link && popd
pushd app1 && yarn link pkg1 && yarn && yarn build && popd
code app1/dist/main.js
```


Comment `Qux.displayName` line in [`pkg1/src/Qux.js`](pkg1/src/Qux.js) and Qux won't be included in app `dist/main.js`

To iterate quickly on changes:

```
pushd pkg1 && yarn build && popd && pushd app1 && yarn build && code dist/main.js && popd
```