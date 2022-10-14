import React from 'react'
import style from './index.module.less'

export default function Loading() {
    return (
        <div className={style['load']}>
            <div className={style['load-wrapp']}>
                <div className={style['load-1']}>
                    <div className={style['line']}></div>
                    <div className={style['line']}></div>
                    <div className={style['line']}></div>
                </div>
            </div>
        </div>
    )
}
