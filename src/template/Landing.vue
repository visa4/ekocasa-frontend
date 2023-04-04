<script>

import 'primeicons/primeicons.css';
import Button from 'primevue/button';
import HeaderCollapse from '../components/layout/HeaderCollapse.vue';
import ImageDescriptor from '../components/media/ImageDescriptor.vue';
import Footer from '../components/layout/Footer.vue';
import { GoogleMap, Marker } from 'vue3-google-map';

export default {
  name: "App",
  components: {
    Button,
    GoogleMap,
    HeaderCollapse,
    Marker,
    ImageDescriptor,
    Footer
  }, 
  data() {
    return {
      center: {lat: 45.6571708, lng: 9.01780280},
      markers: [
        {
          position: {
            lat: 45.6571708, lng: 9.0178028
          },
        }
      ]
    }
  }
};
</script>

<template>
    <HeaderCollapse>
        <template #start>
            <div class="logo"></div>
        </template>
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
    <section>
        <div class="mission">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.    
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.    
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.    
        
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.    
        
        </div>
    </section>
    <section class="column product bc-grey">
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
        <GoogleMap api-key="AIzaSyBnK6JUSmdnAM_QRBHKmfmwDvTYgNxdstI" style="width: 100%; height: 500px" :center="center" :zoom="16">
            <Marker :options="{ position: center }"  />
        </GoogleMap>
    </section>
    <section style="background-color:grey;">
      fornitori
    </section>
    <Footer>
        <template #start>
            <div class="footer-data">
                <div>Ekocasa Srl</div>
                <div>Piva: 04038370138</div>
                <div>Via isonzo 5 Turate (VA)</div>
            </div>
          
        </template>
        <template #end>
            <div class="pi pi-google"></div>
            <div class="pi pi-facebook"></div>
            <div class="pi pi-linkedin"></div>
        </template>
    </Footer>
</template>

<style scoped>

    div.pi {
        margin-right: 20px;
    }

    .pi {
        color: var(--ekocasa-green);
        font-size: 30px;
    }

    video {
        max-width: 100%;
        width: 100%;
        height: 600px;
    }

    .header-content {
        font-size: 32px;
        display: flex;

        text-shadow: -1px 0 var(--ekocasa-black), 0 1px var(--ekocasa-black), 1px 0 var(--ekocasa-black), 0 -1px var(--ekocasa-black);

        font-family: sans; color: #FFFFFF;
        width: 80%;
        align-content: center;
        justify-content: center;
        
    }

    section {
        padding: 80px 0;
        display: flex;
        justify-content: center;
    }

    .bc-grey {
        background-color: #CBCBCB;
    }

    .mission {
        width: 70%;
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
       
    .logo {
        height: 64px;
        width: 64px;
        background-size: contain;

        background-repeat: no-repeat;
        background-position: center center;
        background-image: url("img/header/logo.png");
    }

    .footer-data {
        font-size: 20px;
    }

    /**
     * DEEP IMAGE_DESCRIPTOR
     */
    :deep(.p-image-descriptor) {
        margin-right: 8px;
        margin-bottom: 8px;
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
        height: 3rem !important;
        width: 3rem !important;
    }

    :deep(.p-button .pi) {
        font-size: 30px;
    }

    @media screen and (max-width: 600px) {
        .p-image-descriptor {
            width: 100%  !important;
            margin-right: 0;
            margin-bottom: 0px;
        }
    }

    @media only screen and (min-width: 601px) and (max-width: 1200px) {
        .p-image-descriptor {
            width: 48%  !important;
            margin-bottom: 8px;
        }
        .p-image-descriptor:nth-child(even) {
            margin-right: 0;
        }
    }

    @media only screen and (min-width: 1201px) and (max-width: 1600px) {
        .p-image-descriptor {
            width: 32%  !important;
            margin-bottom: 8px;
        }

        .p-image-descriptor:nth-child(3n) {
            margin-right: 0;
        }
    }
</style>
