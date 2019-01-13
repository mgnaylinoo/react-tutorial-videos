import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 3000,
  headers: {'Authorization': 'token b50b42dc2ca7fea1c34169a805891711c0753571'}
})

export default api