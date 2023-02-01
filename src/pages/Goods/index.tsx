import React, { FC, useRef, useEffect, useState } from 'react'
import style from './index.module.less'
import { Button, Slider } from 'antd'
import { useAppSelector, useAppDispatch } from '@/store/hook'
import type { RootState } from '@/store'
import { decrement1, incrementAsync, increment1 } from '@/store/counter'
import { changeFlag, changeFlagAsync } from '@/store/flag'

const Goods: FC<{}> = () => {
    const renderRef = useRef(true)
    const counter = useAppSelector((state: RootState) => state.counter.value)
    const flag = useAppSelector((state: RootState) => state.flag.value)
    const dispatch = useAppDispatch()
    const [step, setStep] = useState(1)

    const onChange = (newValue: number) => {
        setStep(newValue);
    };

    useEffect(() => {
        if (renderRef.current) { //防止钩子执行两次
            renderRef.current = false
            return
        }

    }, [])

    return (
        <div className={style.goods}>
            <h2>counter：{counter}</h2>
            <div className={style.step}>
                <h2>step：</h2>
                <Slider
                    min={1}
                    max={20}
                    onChange={onChange}
                    value={typeof step === 'number' ? step : 0}
                />
            </div>
            <Button type="primary" onClick={() => dispatch(increment1(step))}>+{step}</Button>
            <Button onClick={() => dispatch(decrement1(step))}>-{step}</Button>
            <Button type="primary" danger onClick={() => dispatch(incrementAsync(step) as any)}>async+{step}</Button>

            <hr />
            <h2>flag：{flag + ''}</h2>
            <Button type="primary" onClick={() => dispatch(changeFlag(!flag))}>flag</Button>
            <Button onClick={() => dispatch(changeFlagAsync(!flag) as any)}>flagAsync写法一</Button>
            <Button type="primary" danger onClick={() => dispatch(changeFlagAsync(Boolean(!flag)))}>flagAsync写法二</Button>
        </div>
    )
}

export default Goods