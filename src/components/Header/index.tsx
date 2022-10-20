import React from 'react'
import { Dropdown, Menu, message } from 'antd'
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom'
import s from './index.module.less'

export default function Header() {
    const navigate = useNavigate()

    const onClick: MenuProps['onClick'] = ({ key }) => {
        localStorage.removeItem('userinfo')
        navigate('/login')
        message.success(`退出成功`);
    };

    const menu = (<Menu onClick={onClick} items={[{
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer">
                退出
            </a>
        ),
    }]}></Menu>)
    return (
        <div className={s.header}>
            <div className='appname'>oo平台</div>
            <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <div className={s.avatar}>
                    <div className='img'></div>
                    <span>{JSON.parse(localStorage.getItem('userinfo') as string).username}</span>
                </div>
            </Dropdown>
        </div>
    )
}
