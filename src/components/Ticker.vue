<template>
    <main>
      <div class="currencies">
        <div>Symbol</div>
        <div>Price</div>
        <div>Bought</div>
        <div>Current Amount</div>
        <div>Profit</div>
      </div>

      <div class="currencies" v-for="coin of this.ticker.coins" :key="coin.id">
        <div>{{coin.symbol}}</div>
        <div>€{{coin.price_eur}}</div>
        <div>€{{coin.boughtFor}}</div>
        <div>€{{coin.currentAmount}}</div>
        <div>€{{coin.profit}}</div>
      </div>
    </main>
</template>

<script>
import CoinTracker from '../services/CoinTracker.service'

export default {
  name: 'TickerComponent',

  data () {
    return {
      ticker: new CoinTracker()
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

.currencies {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

</style>
