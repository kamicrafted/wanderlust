export const data = {
  "key": "v-9ada7f8c",
  "path": "/eat/sea.html",
  "title": "Great Bars in Seattle",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Great Bars in Seattle",
    "description": "This is a description"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "eat/sea.md",
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
