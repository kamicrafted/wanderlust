export const data = {
  "key": "v-5eed287e",
  "path": "/stay/nyc.html",
  "title": "Great Stays in NYC",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Great Stays in NYC",
    "description": "This is a description"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "stay/nyc.md",
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
