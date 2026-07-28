import { client } from '../client'

export const commentsApi = {
  getComments: () => {
    return client
      .get('/comments')
      .then((res) => {
        if (res.status === 200) {
          return res.data
        }
      })
      .catch((err) => {
        console.error('Сетевая ошибка получения комментов' + err)
      })
  },
}
