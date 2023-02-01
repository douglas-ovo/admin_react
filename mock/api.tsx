import { MockMethod } from 'vite-plugin-mock'
import news from './modules/news'

const api: MockMethod[] = [
    ...news as MockMethod[]
]

export default api