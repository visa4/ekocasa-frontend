<template>
    <Toolbar id="p-footer" class="p-footer">
     
    </Toolbar>
</template>

<script>

import Toolbar from 'primevue/toolbar';

export default {
  name: 'Footer',
  props: {
  
  },
  components: { 
    Toolbar
  }
}
</script>

<style>
.p-footer {

      height: 5rem;
      width: 100%;
      padding: 0 2rem;
      transition: left .2s;
      display: flex;
      align-items: center;
      /* box-shadow: 0 3px 5px #00000005; */
      border-radius: 0 !important;
      border: 0 !important;
      background-color: black !important;
  }
</style>
