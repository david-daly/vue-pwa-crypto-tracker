<template>
<div>
    <section>
        <div class="totalProfit__value" :class="totalCSS">{{profit | round | negative}}</div>
    </section>
    <div class="totalProfit__right">
      <div class="totalProfit__arrow">
          (<img src="../assets/icons/down.svg" alt="low temperature"><span>5%</span>)
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'TotalProfit',

  props: {
    profit: {
      type: Number,
      required: true
    }
  },
  computed: {
    totalCSS () {
      return this.profit < 0 ? 'totalProfit__negative' : 'totalProfit__positive'
    }
  }
}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.totalProfit__right {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: rgba(255, 255, 255, 0.75);
    font-size: 1.5em;
    padding-top: 10px;
}

.totalProfit__arrow img {
  vertical-align: middle;
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
</style>
