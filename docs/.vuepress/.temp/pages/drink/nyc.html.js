export const data = {
  "key": "v-6e220eb1",
  "path": "/drink/nyc.html",
  "title": "Great Bars in NYC",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Great Bars in NYC",
    "description": "This is a description"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "drink/nyc.md",
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
