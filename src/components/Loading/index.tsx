import React from 'react'
import style from './index.module.less'

export default function Loading() {
    return (
        <div className={style.load}>
            <div className='load-wrapp'>
                <div className="load-1">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    )
}
