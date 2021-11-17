export const data = {
  "key": "v-786e283c",
  "path": "/first.html",
  "title": "Second Post",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Second Post",
    "description": "This is a description"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "first.md",
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
