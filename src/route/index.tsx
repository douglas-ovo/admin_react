/*
参考博客：https://blog.51cto.com/u_15652665/5330140 路由集中管理
参考博客：https://blog.csdn.net/Svik_zy/article/details/126337429  路由鉴权
*/
import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import AuthRoute from '@/components/AuthRoute'  //鉴权，类似于vue路由守卫beforeEach

const Login = lazy(() => import('@/pages/Login'))
const Home = lazy(() => import('@/pages/Home'))
const Charts = lazy(() => import('@/pages/Charts'))
const Goods = lazy(() => import('@/pages/Goods'))
const News = lazy(() => import('@/pages/News'))
const NewsDetail = lazy(() => import('@/pages/NewsDetail'))

const route: RouteObject[] = [
    {
        path: '/',
        element:
            <AuthRoute>
                <Home />
            </AuthRoute>,
        children: [
            {
                path: 'charts',
                element: <Charts />
            },
            {
                path: 'goods',
                element: <Goods />
            },
            {
                path: 'news',
                element: <News />
            },
            {
                path: '',
                element: <Navigate to='charts' />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/newsdetail',
        element: <NewsDetail />
    },
    {
        path: '',
        element: <Navigate to='/' />
    }
]

export default route