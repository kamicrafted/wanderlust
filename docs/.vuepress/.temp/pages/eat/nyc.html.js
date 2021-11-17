export const data = {
  "key": "v-5ed99b9e",
  "path": "/eat/nyc.html",
  "title": "Good Eats in NYC",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Good Eats in NYC",
    "description": "This is a description",
    "lastUpdated": true
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "eat/nyc.md",
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
