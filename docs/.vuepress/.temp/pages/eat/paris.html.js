export const data = {
  "key": "v-50e1f47e",
  "path": "/eat/paris.html",
  "title": "Good Eats in Paris",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Good Eats in Paris",
    "description": "This is a description"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "eat/paris.md",
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
