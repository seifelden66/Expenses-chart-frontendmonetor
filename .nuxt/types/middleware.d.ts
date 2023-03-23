import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/seife/OneDrive/Desktop/frontend monetor expenses/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}