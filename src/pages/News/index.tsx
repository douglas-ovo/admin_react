import React, { FC, useRef, useEffect } from 'react'
import style from './index.module.less'

const News: FC<{}> = () => {
    const renderRef = useRef(true)

    useEffect(() => {
        if (renderRef.current) { //防止钩子执行两次
            renderRef.current = false
            return
        }

    }, [])

    return (
        <div className={style.chart}>
          news
        </div>
    )
}

export default News