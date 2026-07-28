import { client } from '../client/'

export const usersApi = {
  getUsers: () => {
    return client
      .get('/users')
      .then((res) => {
        if (res.status === 200) {
          return res.data
        }
      })
      .catch((err) => {
        console.error('Произошла сетевая ошибка запроса ' + err)
      })
  },
}
