<template>
    <main>
       Ticker
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

</style>
