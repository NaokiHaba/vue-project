import { createRouter, createWebHistory } from 'vue-router'
import ReactiveView from '@/views/step02/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/step02',
            name: 'step02',
            component: ReactiveView
        },
        {
            path: '/step03',
            name: 'step03',
            component: () => import('@/views/step03/index.vue')
        },
        {
            path: '/step04',
            name: 'step04',
            component: () => import('@/views/step04/index.vue')
        },
    ]
})

export default router
