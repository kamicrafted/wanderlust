import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Hello VuePress",["/index.html","/README.md"]],
  ["v-22a39d25","/about.html","About this site",["/about","/about.md"]],
  ["v-7e684585","/drink/chi.html","Great Bars in Chicago",["/drink/chi","/drink/chi.md"]],
  ["v-6e220eb1","/drink/nyc.html","Great Bars in NYC",["/drink/nyc","/drink/nyc.md"]],
  ["v-73a89e04","/drink/paris.html","Great Bars in Paris",["/drink/paris","/drink/paris.md"]],
  ["v-50219cba","/drink/sea.html","Great Bars in Seattle",["/drink/sea","/drink/sea.md"]],
  ["v-3e4d2df6","/eat/chi.html","Good Eats in Chicago",["/eat/chi","/eat/chi.md"]],
  ["v-5ed99b9e","/eat/nyc.html","Good Eats in NYC",["/eat/nyc","/eat/nyc.md"]],
  ["v-50e1f47e","/eat/paris.html","Good Eats in Paris",["/eat/paris","/eat/paris.md"]],
  ["v-9ada7f8c","/eat/sea.html","Great Bars in Seattle",["/eat/sea","/eat/sea.md"]],
  ["v-6f335f52","/stay/chi.html","Great Stays in Chicago",["/stay/chi","/stay/chi.md"]],
  ["v-5eed287e","/stay/nyc.html","Great Stays in NYC",["/stay/nyc","/stay/nyc.md"]],
  ["v-9ed0e8ea","/stay/paris.html","Great Stays in Paris",["/stay/paris","/stay/paris.md"]],
  ["v-40ecb687","/stay/sea.html","Great Stays in Seattle",["/stay/sea","/stay/sea.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
