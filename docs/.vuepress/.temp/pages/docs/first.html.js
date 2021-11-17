export const data = {
  "key": "v-47887738",
  "path": "/docs/first.html",
  "title": "Second Post",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Second Post",
    "description": "This is a description"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "docs/first.md",
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
