import React, { FC, useRef, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import style from './index.module.less'
import Header from '@/components/Header'
import LeftMenu from '@/components/LeftMenu'

const Home: FC<{}> = () => {
    const renderRef = useRef(true)
    const [state, setState] = useState(false)

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
                <LeftMenu />
                <Outlet />
                {/* {
                    state ? <div>显示</div> : <></>
                }
                <button onClick={() => setState(!state)}>{state ? '隐藏' : '显示'}</button> */}
            </div>
        </div>
    )
}

export default Home