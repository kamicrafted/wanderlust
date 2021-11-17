export const data = {
  "key": "v-9ed0e8ea",
  "path": "/stay/paris.html",
  "title": "Great Stays in Paris",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Great Stays in Paris",
    "description": "This is a description"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "stay/paris.md",
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
