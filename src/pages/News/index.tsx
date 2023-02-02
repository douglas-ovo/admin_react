import React, { FC, useRef, useEffect, useState, ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './index.module.less'
import { Button, Breadcrumb, Pagination, Table, Modal, Form, Input, message } from 'antd'
import type { PaginationProps, FormInstance, InputRef } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios'
const { TextArea } = Input;

interface DataType {
    key: string
    id: string
    title: string
    content: string
}

const News: FC<{}> = () => {
    const renderRef = useRef(true)
    const navigate = useNavigate()

    //useState更新延迟 博客：https://www.jb51.net/article/258217.htm;
    //https://blog.csdn.net/qq_45488467/article/details/126229537
    //表单赋值 博客：https://www.jb51.net/article/198555.htm

    //表格相关
    const [newsList, setNewsList] = useState([])
    const [total, setTotal] = useState(1)
    const [page, setPage] = useState(1)
    const pageRef = useRef<number>()
    const [pageSize, setPageSize] = useState(10)
    const pageSizeRef = useRef<number>()

    //当前操作行
    const [currentRow, setCurrentRow] = useState({})

    //编辑
    const [editshow, setEditshow] = useState(false)
    const [isEdit, setIsEdit] = useState(true)

    //删除
    const [deleteShow, setDeleteShow] = useState(false)

    //表单
    const formDom = useRef<FormInstance>(null)

    const getNews = () => {
        axios.get('/getnews.json', { params: { page: pageRef.current, pageSize: pageSizeRef.current } }).then(res => {
            setNewsList(res.data.result)
            setTotal(res.data.total)
        })
    }
    const pageChange: PaginationProps['onChange'] = (e) => {
        setPage(e)
    }
    const pageSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
        setPageSize(pageSize)
    }
    const rowEdit = (row: DataType) => {
        setEditshow(true)
        setIsEdit(true)
        setCurrentRow(row)
        setTimeout(() => {
            (formDom.current as any).setFieldsValue({ ...row })
        }, 0)
    }
    const rowDelete = (row: DataType) => {
        setCurrentRow(row)
        setDeleteShow(true)
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            width: 50,
            render: (text) => <a>{text}</a>,
        },
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
            width: 250,
            render: (text) => <a>{text}</a>,
        },
        {
            title: '内容',
            dataIndex: 'content',
            key: 'content',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '操作',
            width: 180,
            key: 'action',
            render: (_, row) => (
                <div className={style['news-action']}>
                    <Button style={{ marginRight: '10px' }} onClick={() => rowEdit(row)}>编辑</Button>
                    <Button danger onClick={() => rowDelete(row)}>删除</Button>
                </div>
            )
        }
    ]

    const handleAdd = () => {
        setEditshow(true);
        setIsEdit(false);
        setTimeout(() => {
            (formDom.current as any).resetFields()
        }, 0)
    }

    const onFinish = () => {
        (formDom.current as any).validateFields().then((values: any) => {
            let url, data
            if (isEdit) {
                url = '/editnews.json'
                data = { id: (currentRow as DataType).id, ...values }
            } else {
                url = '/addnews.json'
                data = { ...values }
            }
            axios.post(url, data).then(res => {
                (formDom.current as any).resetFields()
                message.success(res.data.message)

                setTimeout(() => {
                    setEditshow(false)
                    getNews()
                }, 0)
            })
        }, (err: Error) => { })
    }

    const onDelete = () => {
        axios.get('/deletenews.json', { params: { ids: (currentRow as DataType).id } }).then(res => {
            setDeleteShow(false)
            message.success(res.data.message)
            getNews()
        })
    }

    useEffect(() => {
        if (renderRef.current) { //防止钩子执行两次
            renderRef.current = false
            return
        }
        pageRef.current = page
        pageSizeRef.current = pageSize
        getNews()
    }, [page, pageSize])

    return (
        <div className={style.news}>
            <Breadcrumb>
                <Breadcrumb.Item onClick={() => { navigate('/') }}>
                    <a>home</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>news</Breadcrumb.Item>
            </Breadcrumb>
            <Button type="primary" style={{ marginBottom: '20px' }} onClick={handleAdd}>添加新闻</Button>
            <Table columns={columns} dataSource={newsList} pagination={false} rowKey={(row) => row.id} scroll={{ y: 500 }} />
            <Pagination current={page} pageSize={pageSize} total={total} onChange={pageChange} onShowSizeChange={pageSizeChange} showSizeChanger={true} />

            <Modal title={isEdit ? '编辑新闻' : '添加新闻'} open={editshow} okText="确定" cancelText="取消" onOk={onFinish} onCancel={() => { setEditshow(false); (formDom.current as any).resetFields() }}>
                <Form labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    ref={formDom} >
                    <Form.Item
                        label="标题"
                        name="title"
                        rules={[{ required: true, message: '请输入标题' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="内容"
                        name="content"
                        rules={[{ required: true, message: '请输入内容' }]}
                    >
                        <TextArea rows={4} maxLength={6} />
                    </Form.Item>
                </Form>
            </Modal>

            <Modal open={deleteShow} okText="确定" cancelText="取消" onOk={onDelete} onCancel={() => setDeleteShow(false)}>
                <p>确定删除【{(currentRow as DataType).title}】吗</p>
            </Modal>
        </div>
    )
}

export default News