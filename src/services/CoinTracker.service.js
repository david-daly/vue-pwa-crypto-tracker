import axios from 'axios'

let API_BASE_ENDPOINT = 'https://api.coinmarketcap.com/v1'

class CoinTracker {
  constructor () {
    this.getCoinInfo()
  }

  getCoinInfo () {
    let endpoint = `${API_BASE_ENDPOINT}/ticker/`

    axios.get(endpoint)
      .then(response => {
        console.log(response.data)
        return response.data
      })
      .catch(error => console.log(error))
  }
}

export default CoinTracker
