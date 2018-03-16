<template>
    <section>
        <div class="totalBought">
            <img src="../assets/icons/totalbought.svg" alt="total bought">
            <span class="totalBought__text">{{totalBought | round}}</span>
        </div>
        <div class="totalValue">
            <img src="../assets/icons/totalvalue.svg" alt="total value">
            <span class="totalValue__text">{{totalValue | round}}</span>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ValueMetrics',

  props: {
    totalBought: {
      type: Number,
      required: true
    },
    totalValue: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
section {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-bottom: 1px solid;
  padding-bottom: 30px;
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

.totalValue__text {
  font-size: 2em;
  color: rgba(243, 71, 71, 0.75);
  /* color: rgba(255, 255, 255, 0.75); */
}

.totalBought__text {
  font-size: 2em;
  color: #42b983;
  /* color: rgba(255, 255, 255, 0.75); */
}
</style>
