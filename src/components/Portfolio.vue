<template>
    <main>
       <span>{{totalBoughtIn}} || {{totalValue}} || {{totalProfit}}</span>
       <div>
           <button @click="getDataForCurrency('USD')">USD</button>
           <button @click="getDataForCurrency('EUR')">EUR</button>
       </div>
    </main>
</template>

<script>
import CoinTracker from '../services/CoinTracker.service'

export default {
  name: 'PortfolioComponent',

  data () {
    return {
      ticker: new CoinTracker()
    }
  },
  methods: {
    getDataForCurrency (currency) {
      this.ticker.selectCurrency(currency)
    }
  },
  computed: {
    totalBoughtIn () {
      return this.ticker.coins.reduce((coin, next) => coin + next.boughtFor, 0)
    },
    totalValue () {
      return this.ticker.coins.reduce((coin, next) => coin + next.currentAmount, 0)
    },
    totalProfit () {
      return this.ticker.coins.reduce((coin, next) => coin + next.profit, 0)
    }
  }
}
</script>

<style scoped>
main {
    color: black;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}

</style>
