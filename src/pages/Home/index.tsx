import React, { FC, useRef, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import style from './index.module.less'
import Header from '@/components/Header'
import Menu from '@/components/Menu'

const Home: FC<{}> = () => {
    const renderRef = useRef(true)

    useEffect(() => {
        if (renderRef.current) { //防止钩子执行两次
            renderRef.current = false
            return
        }

    }, [])

    return (
        <div className={style.home}>
            <Header />
            <div className={style['main']}>
                <Menu />
                <Outlet />
            </div>
        </div>
    )
}

export default Home