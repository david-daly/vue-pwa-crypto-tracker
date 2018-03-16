<template>
    <main>
      <v-data-table
        :headers="headers"
        :items="this.ticker.coins"
        hide-actions
        class="elevation-1 currencies"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.symbol }}</td>
          <td class="text-xs-right">{{ props.item.price_eur | round(2) }}</td>
          <td class="text-xs-right">{{ props.item.amount | round(2) }}</td>
          <td class="text-xs-right">{{ props.item.boughtFor | round(2) }}</td>
          <td class="text-xs-right">{{ props.item.currentAmount | round(2) }}</td>
          <td class="text-xs-right">{{ props.item.profit | round(2) | negative}}</td>
        </template>
      </v-data-table>
    </main>
</template>

<script>
import CoinTracker from '../services/CoinTracker.service'

export default {
  name: 'TickerComponent',

  data () {
    return {
      ticker: new CoinTracker(),
      headers: [
        {
          text: 'Currency',
          align: 'left',
          sortable: false,
          value: 'symbol'
        },
        { text: 'Price (EUR)', value: 'price_eur' },
        { text: 'Amount Owned', value: 'amount' },
        { text: 'Bought For', value: 'boughtFor' },
        { text: 'Current Value', value: 'currentAmount' },
        { text: 'Profit', value: 'profit' }
      ]
    }
  },

  beforeDestroy () {
    clearInterval(this.ticker.interval)
  }
}
</script>

<style scoped>
main {
    color: black;
    /* width: 100%; */
    /* height: 100%; */
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ccd2d0;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}

.currencies {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #429db9;
  color: white;
}

@media screen and (min-width: 450px) {
  main {
    width: 800px;
    height: 330px;
    border-radius: 5px;
  }
}

</style>
