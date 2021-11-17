export const themeData = {
  "logo": "https://vuejs.org/images/logo.png",
  "displayAllHeaders": true,
  "sidebar": "auto",
  "lastUpdatedText": "Last Updated",
  "navbar": [
    {
      "text": "About",
      "link": "/about/"
    },
    {
      "text": "Eat",
      "ariaLabel": "Places to eat",
      "children": [
        "/eat/nyc.md",
        "/eat/chi.md",
        "/eat/sea.md",
        "/eat/paris.md"
      ]
    },
    {
      "text": "Drink",
      "ariaLabel": "Places to drink",
      "children": [
        "/drink/nyc.md",
        "/drink/chi.md",
        "/drink/sea.md",
        "/drink/paris.md"
      ]
    },
    {
      "text": "Stay",
      "ariaLabel": "Places to stay",
      "children": [
        "/stay/nyc.md",
        "/stay/chi.md",
        "/stay/sea.md",
        "/stay/paris.md"
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
