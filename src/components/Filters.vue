<template>
  <div class="container">
    <div class="inputContainer">
      <v-text-field
        placeholder='dd/mm/yyyy'
        label="Data"
        filled
        type="date-local"
        v-model="date"
        full-width
      />
    </div>
    <div class="inputContainer inputButtonContainer">
      <v-autocomplete
        filled
        label="Coin"
        placeholder="Coin"
        v-model="coin"
        :items='coins'
        full-width
        class="input"
      />
      <v-btn @click="filter"><v-icon>mdi-magnify</v-icon></v-btn>
    </div>
  </div>
</template>

<script lang='ts'> 
import { defineComponent } from 'vue';
import { coinsNames } from '@/utils/coinsOptions';

export default defineComponent({
  name:'Filters',
  props: {
    setFilters: Function
  },
  data() {
    return {
      date: '' as string,
      coin: '' as string,
      coins: coinsNames as String[]
    }
  },
  methods: {
    filter() {
      if(this.setFilters) {
        this.setFilters(this.coin, this.date)
      }
    }
  }
});
</script>

<style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    gap: 1rem;
  }
  .inputContainer {
    width: 200px;
  }
  .inputButtonContainer {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    gap: 1rem;
  }
  .v-text-field{
    width: 200px;
  }
  .v-btn {
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
  @media(600px>width){
    .container {
      flex-direction: column;
      align-items: flex-end;

      width: 100%;
    }
  }
  @media(width>768px){
    .v-btn {
      margin-bottom: 1.5rem;
      font-size: 1.4rem;
    }
    .inputContainer {
      width: 300px;
    }
    .v-text-field{
      width: 300px;
    }
  }
</style>

