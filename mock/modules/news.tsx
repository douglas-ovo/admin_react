
import Mock, { Random } from 'mockjs'
interface IPubilc {
    [k: string]: any
}

let news: IPubilc[] = [
    {
        id: 11,
        title: '冷空气将影响我国大部地区',
        content: '中新网2月1日电 据中央气象台网站消息，2月1日至2日，受冷空气影响，我国大部地区自西向东将有4~6℃降温，青海、川西高原、吉林、河南、湖北、湖南、贵州等地部分地区降温幅度可达8-10℃左右。2月上旬，南方有持续性阴雨天气。'
    },
    {
        id: 10,
        title: '冷空气将影响我国大部地区',
        content: '中新网2月1日电 据中央气象台网站消息，2月1日至2日，受冷空气影响，我国大部地区自西向东将有4~6℃降温，青海、川西高原、吉林、河南、湖北、湖南、贵州等地部分地区降温幅度可达8-10℃左右。2月上旬，南方有持续性阴雨天气。'
    },
    {
        id: 9,
        title: '冷空气将影响我国大部地区',
        content: '中新网2月1日电 据中央气象台网站消息，2月1日至2日，受冷空气影响，我国大部地区自西向东将有4~6℃降温，青海、川西高原、吉林、河南、湖北、湖南、贵州等地部分地区降温幅度可达8-10℃左右。2月上旬，南方有持续性阴雨天气。'
    },
    {
        id: 8,
        title: '网易开放暴雪游戏退款申请通道',
        content: '网易暴雪游戏客服团队表示，今日（2023年2月1日）11 时起，针对玩家在“暴雪游戏产品”中已充值但未消耗的虚拟货币或未失效的游戏服务（下称“可退款商品”）开放退款申请通道。此外，提交退款申请的截止日期为2023年6月30日，未在截止日期前提交退款申请的玩家将被视为主动放弃相关权益。'
    },
    {
        id: 7,
        title: '网易开放暴雪游戏退款申请通道',
        content: '网易暴雪游戏客服团队表示，今日（2023年2月1日）11 时起，针对玩家在“暴雪游戏产品”中已充值但未消耗的虚拟货币或未失效的游戏服务（下称“可退款商品”）开放退款申请通道。此外，提交退款申请的截止日期为2023年6月30日，未在截止日期前提交退款申请的玩家将被视为主动放弃相关权益。'
    },
    {
        id: 6,
        title: '网易开放暴雪游戏退款申请通道',
        content: '网易暴雪游戏客服团队表示，今日（2023年2月1日）11 时起，针对玩家在“暴雪游戏产品”中已充值但未消耗的虚拟货币或未失效的游戏服务（下称“可退款商品”）开放退款申请通道。此外，提交退款申请的截止日期为2023年6月30日，未在截止日期前提交退款申请的玩家将被视为主动放弃相关权益。'
    },
    {
        id: 5,
        title: '网易开放暴雪游戏退款申请通道',
        content: '网易暴雪游戏客服团队表示，今日（2023年2月1日）11 时起，针对玩家在“暴雪游戏产品”中已充值但未消耗的虚拟货币或未失效的游戏服务（下称“可退款商品”）开放退款申请通道。此外，提交退款申请的截止日期为2023年6月30日，未在截止日期前提交退款申请的玩家将被视为主动放弃相关权益。'
    },
    {
        id: 4,
        title: '网易开放暴雪游戏退款申请通道',
        content: '网易暴雪游戏客服团队表示，今日（2023年2月1日）11 时起，针对玩家在“暴雪游戏产品”中已充值但未消耗的虚拟货币或未失效的游戏服务（下称“可退款商品”）开放退款申请通道。此外，提交退款申请的截止日期为2023年6月30日，未在截止日期前提交退款申请的玩家将被视为主动放弃相关权益。'
    },
    {
        id: 3,
        title: '网易开放暴雪游戏退款申请通道',
        content: '网易暴雪游戏客服团队表示，今日（2023年2月1日）11 时起，针对玩家在“暴雪游戏产品”中已充值但未消耗的虚拟货币或未失效的游戏服务（下称“可退款商品”）开放退款申请通道。此外，提交退款申请的截止日期为2023年6月30日，未在截止日期前提交退款申请的玩家将被视为主动放弃相关权益。'
    },
    {
        id: 2,
        title: '网易开放暴雪游戏退款申请通道',
        content: '网易暴雪游戏客服团队表示，今日（2023年2月1日）11 时起，针对玩家在“暴雪游戏产品”中已充值但未消耗的虚拟货币或未失效的游戏服务（下称“可退款商品”）开放退款申请通道。此外，提交退款申请的截止日期为2023年6月30日，未在截止日期前提交退款申请的玩家将被视为主动放弃相关权益。'
    },
    {
        id: 1,
        title: '网易开放暴雪游戏退款申请通道',
        content: '网易暴雪游戏客服团队表示，今日（2023年2月1日）11 时起，针对玩家在“暴雪游戏产品”中已充值但未消耗的虚拟货币或未失效的游戏服务（下称“可退款商品”）开放退款申请通道。此外，提交退款申请的截止日期为2023年6月30日，未在截止日期前提交退款申请的玩家将被视为主动放弃相关权益。'
    }
]

const handlePage = (data: IPubilc[], page: any, pageSize: any) => {
    let proportion = pageSize;
    let num = 0;
    let _data: any[] = [];
    for (let i = 0; i < data.length; i++) {
        if (i % proportion == 0 && i != 0) {
            _data.push(data.slice(num, i) as never);
            num = i;
        }
        if ((i + 1) == data.length) {
            _data.push(data.slice(num, (i + 1)) as never);
        }
    }
    return _data[page - 1];
}

export default [
    {
        url: '/getnews.json',
        method: 'get',
        response(option: any) {
            const { page, pageSize } = option.query

            return {
                result: handlePage(news, page, pageSize),
                total: news.length,
                totalPage: Math.ceil(news.length / pageSize)
            }
        }
    },
    {
        url: "/editnews.json",
        method: 'post',
        response(option: any) {
            const { title, content, id } = option.body

            let newsItem = news.find(item => item.id === id)
            if (newsItem) {
                newsItem.title = title
                newsItem.content = content
            }

            return {
                status: 200,
                message: '编辑成功'
            }
        }
    },
    {
        url: "/deletenews.json",
        method: 'get',
        response(option: any) {
            const { ids } = option.query
            let id = JSON.parse(JSON.stringify(ids.split(',')))

            news = news.filter(item => !id.includes(item.id + ''))

            return {
                status: 200,
                message: '删除成功'
            }
        }
    },
    {
        url: "/addnews.json",
        method: 'post',
        response(option: any) {
            const { title, content } = option.body
            let have = news.find(item => item.title === title)
            if (!have) {
                news.unshift({
                    id: news.length + 1,
                    title,
                    content
                })
            }

            return {
                status: 200,
                message: !have ? '添加成功' : '不能添加重复数据'
            }
        }
    },
]