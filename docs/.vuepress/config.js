module.exports = {
  lang: 'en-US',
  title: 'Wanderlust',
  description: 'Directory of places to check out while traveling for work at fuboTV',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',

    displayAllHeaders: true,
    sidebar: 'auto',
    lastUpdatedText: 'Last Updated',

    navbar: [
      // NavbarItem
      {
          text: 'About',
          link: '/about/',
      },

      // Eats NavbarGroup
      {
          text: 'Eat',
          ariaLabel: 'Places to eat',
          children: [
            '/eat/nyc.md', 
            '/eat/chi.md',
            '/eat/sea.md',
            '/eat/paris.md'
          ],
      },
      
      // Drinks NavbarGroup
      {
        text: 'Drink',
        ariaLabel: 'Places to drink',
        children: [
          '/drink/nyc.md', 
          '/drink/chi.md',
          '/drink/sea.md',
          '/drink/paris.md'
        ],
      },

      // Drinks NavbarGroup
      {
        text: 'Stay',
        ariaLabel: 'Places to stay',
        children: [
          '/stay/nyc.md', 
          '/stay/chi.md',
          '/stay/sea.md',
          '/stay/paris.md'
        ],
      },
    ],
  },

  plugins: [
    [
      '@vuepress/plugin-search',
      {
        // exclude the homepage
        isSearchable: (page) => page.path !== '/',
        isSearchable: (page) => page.path !== '/about',

        // allow searching additional fields
        getExtraFields: (page) => page.frontmatter.tags ?? [],
        getExtraFields: (page) => [page.content]

        // locales: {
        //   '/': {
        //     placeholder: 'Search',
        //   },
        //   '/zh/': {
        //     placeholder: '搜索',
        //   },
        // },
      },

      '@vuepress/plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      },

      '@vuepress/back-to-top',
      '@vuepress/plugin-container',
      '@vuepress/plugin-medium-zoom',
      '@vuepress/plugin-nprogress',
      '@vuepress/plugin-smooth-scroll'
    ],
  ],
}