<script setup>

import Toolbar from 'primevue/toolbar';

import {ref} from 'vue'

const count = ref(0);

const increaseCount = () => {
  count.value++;
}
</script>

<template>
  <Toolbar class="header">
    <template #start>
      test
    </template>
  </Toolbar>
</template>

<style scoped>
.header {
  position: fixed;
    height: 5rem;
    z-index: 997;
    left: 0;
    top: 0;
    width: 100%;
    padding: 0 2rem;
    background-color: var(--surface-card);
    transition: left .2s;
    display: flex;
    align-items: center;
    box-shadow: 0 3px 5px #00000005,
}
</style>
