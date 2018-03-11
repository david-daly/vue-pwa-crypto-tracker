let API_BASE_ENDPOINT = 'https://api.coinmarketcap.com/v1'

class CoinTracker {
  constructor () {
    this.getCoinInfo()
  }

  getCoinInfo () {
    let endpoint = `${API_BASE_ENDPOINT}/ticker`

    return fetch(endpoint)
      .then(response => {
        console.log(response.json())
        return response.json()
      })
      .catch(error => console.log(error))
  }
}

export default CoinTracker
