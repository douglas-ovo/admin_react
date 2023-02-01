import React, { FC, useRef, useEffect } from 'react'
import style from './index.module.less'
import { Button, Form, Input, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import react_svg from '@/assets/img/react.svg'
import vite_svg from '@/assets/img/vite.svg'

const Login: FC<{}> = () => {
    const navigate = useNavigate()

    const renderRef = useRef(true)
    useEffect(() => {
        if (renderRef.current) { //防止钩子执行两次
            renderRef.current = false
            return
        }

    }, [])

    const onFinish = (values: any) => {
        if (values) {
            localStorage.setItem('userinfo', JSON.stringify(values))
            message.success(`登录成功`);
            navigate('/')
        }
    };

    return (
        <div className={style.login}>
            <div className={style['icon']}>
                <img src={react_svg} alt="" />
                <img src={vite_svg} alt="" />
            </div>
            <Form
                className={style['form']}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="用  户"
                    name="username"
                    rules={[{ required: true, message: '请输入用户名' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密  码"
                    name="password"
                    rules={[{ required: true, message: '请输入用户密码' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login