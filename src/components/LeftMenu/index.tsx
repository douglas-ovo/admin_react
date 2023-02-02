import React, { useEffect, useRef } from 'react'
import s from './index.module.less'
import { Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { PieChartOutlined, ShoppingOutlined, FileDoneOutlined } from '@ant-design/icons';

export default function LeftMenu() {
    const navigate = useNavigate()
    const location = useLocation()
    const renderRef = useRef(true)

    const items = [
        { label: '图表', key: '/charts', icon: <PieChartOutlined style={{ fontSize: '22px' }} /> },
        { label: '商品', key: '/goods', icon: <ShoppingOutlined style={{ fontSize: '22px' }} /> },
        { label: '新闻', key: '/news', icon: <FileDoneOutlined style={{ fontSize: '22px' }} /> }
    ];

    const itemClick = (e: any) => {
        navigate(e.key)
    }

    useEffect(() => {
        if (renderRef.current) {
            renderRef.current = false
            return
        }
    })

    return (
        <div className={s['menu']}>
            <Menu items={items} selectedKeys={[location.pathname]} onClick={itemClick} defaultSelectedKeys={['/charts']} theme='dark' />
        </div>
    )
}
