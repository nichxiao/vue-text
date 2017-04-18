import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import Broadcast from '../pages/Broadcast'
import AudioBook from '../pages/AudioBook'
import group from '../pages/group'
import mine from '../pages/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/audioBook',
      name: 'AudioBook',
      component: AudioBook
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
    	path:'./index',
    	redirect:'/'
    },
    {
    	path:'*',
    	redirect:'/'
    }
  ]
})
