<template>
    <main>
      <section class="section1">
        <div class="totalBought">
          <img src="../assets/icons/totalbought.svg" alt="total paid">
          <span class="totalBought__text">{{totalBoughtIn}}</span>
        </div>
        <div class="totalValue">
          <img src="../assets/icons/totalvalue.svg" alt="total value">
          <span class="totalValue__text">{{totalValue}}</span>
        </div>
      </section>

      <section class="section2">
        <div class="totalProfit__value" :class="totalCSS">{{totalProfit}}</div>
         <div class="totalProfit__right">
            <div class="totalProfit__arrow">
                (<img src="../assets/icons/down.svg" alt="low temperature"><span>5%</span>)
            </div>
        </div>
      </section>

      <div>
          <v-btn flat small @click="getDataForCurrency('USD')">USD</v-btn>
          <v-btn flat small @click="getDataForCurrency('EUR')">EUR</v-btn>
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
    },

    totalCSS () {
      return this.totalProfit < 0 ? 'totalProfit__negative' : 'totalProfit__positive'
    }
  }
}
</script>

<style scoped>
.section1 {
  width: 100%;
  padding-top: 25px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.section2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

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
  background-color: #429db9;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  color: rgba(255, 255, 255, 0.75);

}

.totalProfit__right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgba(255, 255, 255, 0.75);
}

.totalProfit__arrow img {
  vertical-align: middle;
}

.totalBought img {
  width: 45px;
  height: 45px;
  vertical-align: top;
  padding-right: 2px;
}

.totalValue img {
  width: 45px;
  height: 45px;
  vertical-align: top;
  padding-right: 2px;
}

.totalProfit__value {
  font-size: 5em;
}

.totalProfit__negative {
  color: rgba(243, 71, 71, 0.75);
}

.totalProfit__positive {
  color: rgba(255, 255, 255, 0.75);
}

.totalValue__text {
  font-size: 2em;
  color: rgba(255, 255, 255, 0.75);
}

.totalBought__text {
  font-size: 2em;
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
