import Vue from 'vue'
import Router from 'vue-router'
import EventList from '../views/EventList'
import EventCreate from '../views/EventCreate'
import EventShow from '../views/EventShow'
import User from '../views/User'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList,
  },
  {
    path: '/event/:id',
    name: 'event-show',
    component: EventShow,
    props: true,
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate,
  },
  {
    path: '/user/:username',
    name: 'user-account',
    component: User,
    props: true,
  },
]

const router = new Router({
  mode: 'history',
  routes: routes,
})

export default router
