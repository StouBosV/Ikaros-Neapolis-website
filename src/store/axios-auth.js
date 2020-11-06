import axios from 'axios'

const instance = axios.create({
  baseURL: 'mongodb+srv://stoumposv:stoumpos@ikarosneapolis.xpe6q.mongodb.net/Ikaros?retryWrites=true&w=majority'
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance