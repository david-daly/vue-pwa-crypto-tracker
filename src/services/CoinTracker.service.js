import axios from 'axios'
import * as userData from '../data/userData.json'

let API_BASE_ENDPOINT = 'https://api.coinmarketcap.com/v1'

class CoinTracker {
  constructor () {
    this.coins = []
    this.getCoinInfo()
  }

  getCoinInfo () {
    let endpoint = `${API_BASE_ENDPOINT}/ticker/`
    let trackedCoinsSymbols = userData.coins.map(coin => coin.symbol)

    axios
      .get(endpoint)
      .then(response => {
        let res = response.data.filter(currency => {
          return trackedCoinsSymbols.includes(currency.symbol)
        })

        // res.map(coin => {
        //   console.log(coin)
        //   if (userData.coins.find(coin.symbol)) {
        //     console.log('test')
        //   }
        // });

        this.coins = res
      })
      .catch(error => console.log(error))
  }
}

export default CoinTracker
