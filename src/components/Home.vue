<template>
  <v-main>
    <Filters :setFilters="setFilters"/>
    <TradeTable :coin="coin" :trades="trades"/>
  </v-main>
</template>

<script lang="ts"> 
import { ITrade } from '@/interfaces/trade';
import { defineComponent } from 'vue';
import Filters from './Filters.vue';
import TradeTable from './TradeTable.vue';
import axios from "axios";
import { getDatesToUnix } from '@/utils/getDatesToUnix';

export default defineComponent({
  name: "Home",
  components: {
    TradeTable,
    Filters
  },
  data() {
    return {
      coin: 'BTC' as string,
      date: '' as string,
      trades: [] as ITrade[]
    }
  },
  methods: {
    async getTrades() {
      const dateArray = getDatesToUnix(this.date)
      let url = ''
      if(this.date !== '') {
        url = `https://www.mercadobitcoin.net/api/${this.coin}/trades/${dateArray[0]}/${dateArray[1]}`
      } else {
        url = `https://www.mercadobitcoin.net/api/${this.coin}/trades/`
      }
      await axios.get(url)
      .then((res) => this.trades = res.data)
      .then((_) =>  {
        this.trades.map((trade) => {
          if(trade.type === 'buy') {
            trade.type = 'compra'
          } else {
            trade.type = 'venda'
          }
        })
      })
    },
    formatTrades() {
      this.trades.reverse()
      this.trades.map((trade) => {
        trade.priceString = trade.price.toFixed(2).split('.').join(',')
        trade.tradeValue = (Math.round(Number(trade.price * trade.amount) * 100) / 100).toFixed(2).split('.').join(',')
        trade.time = new Date(trade.date * 1000).toLocaleTimeString("pt-BR")
        trade.day = new Date(trade.date * 1000).toLocaleDateString("pt-BR")
      })
    },  
    setFilters(newCoin: string, newDate: string) {
      this.coin = newCoin
      this.date = newDate
      this.getTrades()
      .then((_) => this.formatTrades())
    }
  },
  mounted() {
    this.setFilters('BTC', '')
  }
});
</script>

<style scoped>
  main {
    padding: 0 1rem;
  }
  @media(width>768px){
    main {
      padding: 0 5rem;
    }
  }
</style>

