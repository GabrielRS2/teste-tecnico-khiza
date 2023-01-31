<template>
  <div>
    <p>Teste técnico</p>
  </div>
</template>

<script lang="ts"> 
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>

<style scoped>
  div {
    display: flex;
    align-items: center;

    height: 5rem;
    padding: 0 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #ADB5BD;
    
    box-shadow: 0px -7.5px 20px black;
  }
  p {
    font-size: 1.5rem;
    font-weight: 600;
  }
  @media(width>768px){
    div {
      padding-left: 5rem;
    }
  }
</style>

