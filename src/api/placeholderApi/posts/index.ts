import { client } from '../client'

export const postsApi = {
  getPosts: () => {
    return client
      .get('/posts')
      .then((res) => {
        if (res.status === 200) {
          return res.data
        }
        throw new Error('ОШИБКА ПОЛУЧЕНИЯ ДАННЫХ')
      })
      .catch((err) => {
        console.error('Сетевая ошибка получения постов ' + err)
      })
  },
}
