
import Mock, { Random } from 'mockjs'
interface IPubilc {
    [k: string]: any
}

const news: IPubilc[] = [
    {
        id: 1,
        title: '冷空气将影响我国大部地区',
        content: '中新网2月1日电 据中央气象台网站消息，2月1日至2日，受冷空气影响，我国大部地区自西向东将有4~6℃降温，青海、川西高原、吉林、河南、湖北、湖南、贵州等地部分地区降温幅度可达8-10℃左右。2月上旬，南方有持续性阴雨天气。'
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
    }
]