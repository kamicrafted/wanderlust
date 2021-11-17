export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Hello VuePress",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg",
    "heroText": "Welcome to Wanderlust!",
    "tagline": "Your one-stop directory for finding hidden gems that the locals know about.",
    "actionText": "Get Started →",
    "actionLink": "/guide/",
    "features": [
      {
        "title": "New York City",
        "details": "Minimal setup with markdown-centered project structure helps you focus on writing."
      },
      {
        "title": "Chicago",
        "details": "Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue."
      },
      {
        "title": "Seattle",
        "details": "VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded."
      }
    ],
    "footer": "Made with ❤️",
    "lastUpdated": true
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
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
