// import { useAppSelector, useAppDispatch } from '@/store/hook'
// import type { RootState } from '@/store'
// import { decrement1, incrementAsync, increment1, incrementx } from '@/store/couter'
// import { changeFlag, changeFlagAsync } from '@/store/flag'
import React, { FC, useRef, useEffect } from 'react'
import style from './index.module.less'
import { Button } from 'antd'

const Login: FC<{}> = () => {
    // const counter = useAppSelector((state: RootState) => state.counter.value)
    // const flag = useAppSelector((state: RootState) => state.flag.value)
    // const dispatch = useAppDispatch()

    const renderRef = useRef(true)

    useEffect(() => {
        if (renderRef.current) { //防止钩子执行两次
            renderRef.current = false
            return
        }

    }, [])

    return (
        <div className={style.chart}>
            <h2>登录</h2>
            <Button>antd按钮</Button>
            {/* <hr />
            <h3>counter：{counter}</h3>
            <button onClick={() => dispatch(increment1())}>+1</button>
            <button onClick={() => dispatch(decrement1())}>-1</button>
            <button onClick={() => dispatch(incrementx(5))}>+5</button>
            <button onClick={() => dispatch(incrementAsync(100) as any)}>async</button>
            <hr />
            <h3>flag:{flag + ''}</h3>
            <button onClick={() => dispatch(changeFlag(!flag))}>flag</button>
            <button onClick={() => dispatch(changeFlagAsync(!flag) as any)}>flagAsync</button>
            <button onClick={() => dispatch(changeFlagAsync(Boolean(!flag)))}>flagAsync</button> */}
        </div>
    )
}

export default Login