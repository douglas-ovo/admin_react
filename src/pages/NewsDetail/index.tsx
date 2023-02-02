import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import axios from '@/http'
import { Button } from 'antd'
import style from './index.module.less'

interface DataType {
    key?: string
    id?: string
    title?: string
    content?: string
}

export default function NewsDetail() {
    const [search, setsearch] = useSearchParams()
    const renderRef = useRef(true)
    const [news, setNews] = useState<DataType>({});
    const navigate = useNavigate()

    const getNew = () => {
        axios.get('/getnew.json', { params: { id: search.get('id') } }).then(res => {
            setNews(res.data.result)
        })
    }

    useEffect(() => {
        if (renderRef.current) {
            renderRef.current = false
            return
        }
        getNew()
    }, [])

    return (
        <div className={style['news-detail']}>
            <div className={style.center}>
                <h2>{news.title}</h2>
                <div className={style.cnt}>{news.content}</div>
                <Button style={{ marginLeft: '20px' }} onClick={() => navigate(-1)}>返回</Button>
            </div>
        </div>
    )
}
