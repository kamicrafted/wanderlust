export const data = {
  "key": "v-23239e15",
  "path": "/guide/first.html",
  "title": "Second Post",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Second Post",
    "description": "This is a description"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/first.md",
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
