import React, { FC, useRef, useEffect, useState } from 'react'
import style from './index.module.less'
import { Button } from 'antd'
import axios from 'axios'

const News: FC<{}> = () => {
    const renderRef = useRef(true)
    const [newsList, setNewsList] = useState([])

    const getNews = () => {
        axios.get('/getnews.json', { params: { page: 1, pageSize: 1 } }).then(res => {
            setNewsList(res.data.result)
            // console.log(newsList);
        })
    }

    useEffect(() => {
        if (renderRef.current) { //防止钩子执行两次
            renderRef.current = false
            return
        }
        getNews()
    }, [])

    return (
        <div className={style.news}>
            news
            <Button>测试</Button>
        </div>
    )
}

export default News