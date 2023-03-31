<script>

import 'primeicons/primeicons.css';
import Button from 'primevue/button';
import HeaderCollapse from '../components/layout/HeaderCollapse.vue';
import ImageDescriptor from '../components/media/ImageDescriptor.vue';
import Footer from '../components/layout/Footer.vue';

export default {
  name: "App",
  components: {
    Button,
    HeaderCollapse,
    ImageDescriptor,
    Footer
  }
};
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
    <section class="column product">
        <ImageDescriptor img-url="img/card/pavimenti.webp">
            <template #out>Pavimenti</template>
            <template #inside>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</template>
        </ImageDescriptor>
        <ImageDescriptor img-url="img/card/rivestimenti.jpg">
            <template #out>Rivestimenti</template>
            <template #inside>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</template>
        </ImageDescriptor>
        <ImageDescriptor img-url="img/card/pavimenti.webp">
            <template #out>Bagno</template>
            <template #inside>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</template>
        </ImageDescriptor>
        <ImageDescriptor img-url="img/card/rivestimenti.jpg">
            <template #out>Arredo bagno</template>
            <template #inside>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</template>
        </ImageDescriptor>
        <ImageDescriptor img-url="img/card/pavimenti.webp">
            <template #out>Porte</template>
            <template #inside>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</template>
        </ImageDescriptor>
        <ImageDescriptor img-url="img/card/rivestimenti.jpg">
            <template #out>Serramenti</template>
            <template #inside>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</template> 
        </ImageDescriptor>
    </section>
    <section>
      
    </section>
    <Footer></Footer>
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

    .product {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .btn-inv {
        color: transparent
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
    /**
     * DEEP IMAGE_DESCRIPTOR
     */
    :deep(.p-image-descriptor) {
        margin-right: 8px;
        display: flex;
        align-items: center;
        font-size: 36px;
        text-shadow: -1px 0 #B5B0B0, 0 1px #B5B0B0, 1px 0 #B5B0B0, 0 -1px #B5B0B0;
        width: 22%;
        justify-content: center;
    }

    :deep(.overlay-content) {
        padding: 0 30px;
    }
    /**
     * DEEP HEADER_COLLAPSE
     */
    :deep(.p-card-header) {
        height: 150px;
        overflow: hidden;
    }
    /**
     * DEEP BUTTON
     */
    :deep(.p-button) {
        margin-right: 10px;
        height: 4rem !important;
        width: 4rem !important;
    }

    :deep(.p-button .pi) {
        font-size: 2rem;
    }

    @media screen and (max-width: 600px) {
        .p-image-descriptor {
            width: 100%  !important;
            margin-right: 0;
        }
    }

    @media only screen and (min-width: 601px) and (max-width: 1200px) {
        .p-image-descriptor {
            width: 48%  !important;
        }
        .p-image-descriptor:nth-child(even) {
            margin-right: 0;
        }
    }

    @media only screen and (min-width: 1201px) and (max-width: 1600px) {
        .p-image-descriptor {
            width: 32%  !important;
        }

        .p-image-descriptor:nth-child(even) {
            margin-right: 0;
        }
    }
</style>
