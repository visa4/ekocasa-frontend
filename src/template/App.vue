<script setup>

import 'primeicons/primeicons.css';
import Button from 'primevue/button';
import Card from 'primevue/card';
import HeaderCollapse from '../components/header/HeaderCollapse.vue';

</script>

<template>
    <HeaderCollapse>
        <template #end>
            <a href="mailto:a.visalli@ekocasa.it?cc=s.pizzino@ekocasa.it&subject=Informazioni&body=Buongiorno ekocasa potrei avere maggiori informazioni in merito a..." target="_blank" class="btn-inv">
                <Button icon="pi pi-send" rounded severity="mail"/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=3407626126&text=Buongiorno ekocasa potrei avere maggiori informazioni in merito a..." target="_blank" class="btn-inv">
                <Button icon="pi pi-whatsapp" rounded severity="whattapp" />
            </a>      
        </template>
        <template #headerContent>
            <div class="header-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.    
            </div>
        </template>
    </HeaderCollapse>
    <section class="column">
        <Card style="width: 20em; ">
            <template #header>
                <img alt="user header" src="/img/card/header.jpg" />
            </template>
            <template #content>
                <img src="img/card/header.jpg" class="card-img" alt="">
                <div class="product-title">Pavimento</div>
            </template>
        </Card>
        <Card style="width: 20em; ">
            <template #header>
                <img alt="user header" src="/img/card/header.jpg" />
            </template>
            <template #content>
                <img src="img/card/header.jpg" class="card-img" alt="">
                <div class="product-title">Rivestimento</div>
            </template>
        </Card>
        <Card style="width: 20em; ">
            <template #header>
                <img alt="user header" src="/img/card/header.jpg" />
            </template>
            <template #content>
                <img src="img/card/header.jpg" class="card-img" alt="">
                <div class="product-title">Arredo bagno</div>
            </template>
        </Card>
        <Card style="width: 20em; ">
            <template #header>
                <img alt="user header" src="/img/card/header.jpg" />
            </template>
            <template #content>
                <img src="img/card/header.jpg" class="card-img" alt="">
                <div class="product-title">Serramenti</div>
            </template>
        </Card>
        <Card style="width: 20em; ">
            <template #header>
                <img alt="user header" src="/img/card/header.jpg" />
            </template>
            <template #content>
                <img src="img/card/header.jpg" class="card-img" alt="">
                <div class="product-title">Porte</div>
            </template>
        </Card>
    </section>
</template>

<style scoped>
    .header-content {
        font-size: 32px;
        display: flex;

        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

        font-family: sans; color: #FFFFFF;
        width: 80%;
        align-content: center;
        justify-content: center;
        
    }

    section {
        padding: 40px 0;
        display: flex;
        justify-content: center;
    }

    .column {
        display: flex;
        flex-direction: row;
    }

    .btn-inv {
        color: transparent
    }

    :deep(.p-card) {
      
        padding: 0;
        height: 100%;
        border-radius: 0px;
        margin-right: 8px;
    }

    :deep(.p-card-header) {
        height: 150px;
        overflow: hidden;
    }

    :deep(.p-button) {
        margin-right: 10px;
        height: 4rem !important;
        width: 4rem !important;
    }

    :deep(.p-button .pi) {
        font-size: 2rem;
    }
   
    .product-title {
        top: -150px;
        font-size: 22px;
        margin-left: 100px;
        color: #ffffff;
        position: relative;
        font-weight: 700;
        width: 150px;
    }

    .card-img {
        position: relative;
        top: -86px;
        border-radius: 100%;
        height: 60px;
        width:  60px;
    }

</style>
