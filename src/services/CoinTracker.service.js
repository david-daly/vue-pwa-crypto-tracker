import axios from 'axios'
import * as userData from '../data/userData.json'

let API_BASE_ENDPOINT = 'https://api.coinmarketcap.com/v1'
let BASE_CURRENCY = 'EUR'

class CoinTracker {
  constructor () {
    this.coins = []
    this.getCoinInfo()
  }

  getCoinInfo () {
    this.fetchData(BASE_CURRENCY)
  }

  fetchData (currency) {
    let endpoint = `${API_BASE_ENDPOINT}/ticker/?convert=${currency}`
    let trackedCoinsSymbols = userData.coins.map(coin => coin.symbol)

    axios
      .get(endpoint)
      .then(response => {
        let res = response.data.filter(c => {
          return trackedCoinsSymbols.includes(c.symbol)
        })

        res.map(coin => {
          let coinData = userData.coins.find(userCoin => userCoin.symbol === coin.symbol)
          if (coinData) {
            coin.boughtFor = coinData.boughtFor
            coin.amount = coinData.amount
            coin.currentAmount = Math.round(coin[`price_${currency.toLowerCase()}`] * coin.amount)
            coin.profit = Math.round(coin.currentAmount - coin.boughtFor)
          }
        })

        this.coins = res
      })
      .catch(error => console.log(error))
  }

  selectCurrency (currency) {
    this.fetchData(currency)
  }
}

export default CoinTracker
