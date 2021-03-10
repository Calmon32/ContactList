import axios from 'axios'

class Api {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getUser(params) {
    const response = await axios.get('/', { baseURL: this.baseURL, params });
    return response.data
  }

}

export default new Api();