export const data = {
  "key": "v-22a39d25",
  "path": "/about.html",
  "title": "About this site",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "About this site",
    "description": "This is a description",
    "sidebar": false
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "about.md",
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
