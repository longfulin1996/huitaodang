import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Index from '../pages/index'
import Boutique from '../pages/boutique'
import Collection from '../pages/collection'
import Column from '../pages/column'
import Search from '../pages/search'
import DetailedView from '../pages/DetailedView'
import Not404 from '../pages/Not404'
import Item from '../pages/item'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: '/htd',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/boutique',
      name: 'Boutique',
      component: Boutique,
    },
    {
      path: '/jingdong',
      name: 'Jingdong',
      component: Boutique,
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection,
    },
    {
      path: '/category',
      name: 'Category',
      component: Index,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/search/:num',
      name: 'SearchView',
      component: Index,
    },
    {
      path: '/popular-items/',
      name: 'PopularItems',
      component: Item
    },
    {
      path: '/activities/',
      name: 'Activities',
      component: Item
    },
    {
      path: '/9k9/',
      name: 'A9k9',
      component: Item
    },
    {
      path: '/20k/',
      name: 'A20k',
      component: Item
    },
    {
      path: '/column',
      name: 'Column',
      component: Column,
    },
    {
      path: '/view/:num',
      name: 'DetailedView',
      component: DetailedView,
    },
    {
      path: '*',
      component: Not404,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
