/*
参考博客：https://blog.51cto.com/u_15652665/5330140 路由集中管理
*/
import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
const Login = lazy(() => import('@/pages/Login'))
const Home = lazy(() => import('@/pages/Home'))

const route: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '',
        element: <Navigate to='/' />
    }
]

export default route