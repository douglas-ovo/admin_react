import React from 'react'
import s from './index.module.less'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { PieChartOutlined, ShoppingOutlined, FileDoneOutlined } from '@ant-design/icons';

export default function LeftMenu() {
    const navigate = useNavigate()

    const items = [
        { label: '图表', key: '/charts', icon: <PieChartOutlined style={{ fontSize: '22px' }} /> },
        { label: '商品', key: '/goods', icon: <ShoppingOutlined style={{ fontSize: '22px' }} /> },
        { label: '新闻', key: '/news', icon: <FileDoneOutlined style={{ fontSize: '22px' }} /> }
    ];

    const itemClick = (e: any) => {
        navigate(e.key)
    }

    return (
        <div className={s['menu']}>
            <Menu items={items} onClick={itemClick} defaultSelectedKeys={['/charts']} theme='dark' />
        </div>
    )
}
