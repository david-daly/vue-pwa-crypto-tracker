<template>
    <main>
      <ValueMetrics
        :totalBought="this.totalBought"
        :totalValue="this.totalValue"
      ></ValueMetrics>

      <TotalProfit
        :profit="this.totalProfit"
      ></TotalProfit>

      <div>
          <v-btn flat small @click="getDataForCurrency('USD')">USD</v-btn>
          <v-btn flat small @click="getDataForCurrency('EUR')">EUR</v-btn>
      </div>
    </main>
</template>

<script>
import CoinTracker from '../services/CoinTracker.service'
import ValueMetrics from './ValueMetrics'
import TotalProfit from './Profit'

export default {
  name: 'PortfolioComponent',

  components: {
    ValueMetrics,
    TotalProfit
  },

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
    totalBought () {
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
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #429db9;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  color: rgba(255, 255, 255, 0.75);

}

@media screen and (min-width: 450px) {
  main {
    width: 330px;
    height: 600px;
    border-radius: 5px;
  }
}
</style>
