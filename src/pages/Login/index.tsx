import React, { FC, useRef, useEffect } from 'react'
import style from './index.module.less'
import { useAppSelector, useAppDispatch } from '@/store/hook'
import type { RootState } from '@/store'
import { decrement1, getData, increment1, incrementx } from '@/store/couter'
import { changeFlag, getUser } from '@/store/flag'

const Login: FC<{}> = () => {
    const renderRef = useRef(true)
    const counter = useAppSelector((state: RootState) => state.counter.value)
    const flag = useAppSelector((state: RootState) => state.flag.value)
    const dispath = useAppDispatch()

    useEffect(() => {
        if (renderRef.current) { //防止钩子执行两次
            renderRef.current = false
            return
        }

    }, [])

    return (
        <div className={style.chart}>
            <h2>登录</h2>
            <hr />
            <h3>counter：{counter}</h3>
            <button onClick={() => dispath(increment1())}>+1</button>
            <button onClick={() => dispath(decrement1())}>-1</button>
            <button onClick={() => dispath(incrementx(5))}>+5</button>
            <button onClick={() => dispath(getData(100) as any)}>async</button>
            <hr />
            <h3>flag:{flag + ''}</h3>
            <button onClick={() => dispath(changeFlag(!flag))}>flag</button>
            <button onClick={() => dispath(getUser(!flag) as any)}>flagAsync</button>
        </div>
    )
}

export default Login