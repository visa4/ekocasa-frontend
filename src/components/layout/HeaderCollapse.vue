<script setup>

import Toolbar from 'primevue/toolbar';
import { ref } from 'vue'

const colorBgHeader = ref("33, 116, 74");

defineExpose({
  colorBgHeader
})

/**
 * fade the scroll of the header
 */
function fadeHeader () {
  var doc = document.documentElement;
  var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
 
  var subHeaderEle = document.getElementById('subHeader');
  var tollBarEle = document.getElementById('toolbar');

  if (top === 0) {
    subHeaderEle.style.opacity = 1;
    tollBarEle.style.backgroundColor = "transparent";
    
    return;
  }

  let opacity = top / 600;
  subHeaderEle.style.opacity = 1 - opacity;
  tollBarEle.style.backgroundColor = `rgba(${colorBgHeader.value}, ${opacity})`;
  
}

document.addEventListener("scroll", fadeHeader);

</script>

<template>
  <header id="wrap" class="p-header">
    <Toolbar id="toolbar" class="header">
      <template #start>
        <slot name="start"></slot>
      </template>
      <template #center>
        <slot name="center"></slot>
      </template>
      <template #end>
        <slot name="end"></slot>
      </template>
    </Toolbar>
    <div id="subHeader" class="p-sub-header">
      <slot name="headerContent"></slot>
    </div>
  </header>
</template>

<style scoped>

  :deep(.p-toolbar) {
      position: fixed;
      height: 5rem;
      z-index: 997;
      left: 0;
      top: 0;
      width: 100%;
      padding: 0 2rem;
      transition: left .2s;
      display: flex;
      align-items: center;
      /* box-shadow: 0 3px 5px #00000005; */
      border-radius: 0;
      border: 0;
      background-color: transparent;
  }



  .p-sub-header {
    height: 600px;
    width: 100%;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: v-bind('colorFromScript');
    background-image: url("../../../public/img/card/header.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .logo {
    width: 200px;
    height: 80px;
    background-image: url("../../assets/logo.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }

.example {
  height: 300px;
  width: 100%;
  border: 1px solid black;
}
</style>
