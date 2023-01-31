<template>
  <div>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            Moeda
          </th>
          <th class="text-left">
            Quantidade
          </th>
          <th class="text-left">
            Valor do Trade
          </th>
          <th class="text-left">
            Valor da Moeda
          </th>
          <th class="text-left">
            Data
          </th>
          <th class="text-left">
            Tipo
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(trade, index) in trades"
          :key="index"
        >
          <td>{{ coin }}</td>
          <td>{{ trade.amount }}</td>
          <td>R$ {{ trade.tradeValue }}</td>
          <td>R$ {{ trade.priceString }}</td>
          <td>{{ trade.day }} {{ trade.time }}</td>
          <td>{{ trade.type }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script lang="ts"> 
  import { defineComponent, PropType } from 'vue';
  import { ITrade } from "src/interfaces/trade"

  export default defineComponent({
    name: 'TradeTable',
    props: {
      trades: Array as PropType<ITrade[]>,
      coin: String
    }
  });
</script>

<style scoped>
  div {
    border: 1px solid #ADB5BD;
    border-radius: 0.5rem;
  }
</style>
