import axios from 'axios'

class Api {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getUser(params = {}) {
    try {
      const response = await axios.get('/', { baseURL: this.baseURL, params });
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

}

export default new Api();