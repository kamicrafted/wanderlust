export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "Title of this page 2!!!",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Title of this page 2!!!",
    "description": "Description of this page 2"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/README.md",
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
