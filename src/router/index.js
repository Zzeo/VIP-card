import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/components/index'
import Collection from '@/components/Collection'
import My from '@/components/My'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        default: index,
        hello: Hello
      }
    },
    {
      path: '/collection',
      name: 'Collection',
      components: {
        default: Collection
      }
    },
    {
      path: '/my',
      name: 'My',
      components: {
        default: My
      }
    }
  ]
})
