<script>

import 'primeicons/primeicons.css';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Galleria from 'primevue/galleria';
import { GoogleMap, Marker } from 'vue3-google-map';
import HeaderCollapse from '../components/layout/HeaderCollapse.vue';
import ImageDescriptor from '../components/media/ImageDescriptor.vue';
import VideoWall from '../components/media/VideoWall.vue';
import Footer from '../components/layout/Footer.vue';



export default {
  name: "App",
  components: {
    Button,
    Card,
    Galleria,
    GoogleMap,
    HeaderCollapse,
    Marker,
    ImageDescriptor,
    VideoWall,
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
      ],
      activeIndex: 0,
      responsiveOptions: [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
      ],
      displayCustom: false,
      images: [
        {
            itemImageSrc: "img/gallery/lavoro1.jpeg",
            thumbnailImageSrc: "img/gallery/lavoro1.jpeg",
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: "img/gallery/lavoro2.jpeg",
            thumbnailImageSrc: "img/gallery/lavoro2.jpeg",
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: "img/gallery/lavoro3.jpeg",
            thumbnailImageSrc:  "img/gallery/lavoro3.jpeg",
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: "img/gallery/lavoro4.jpeg",
            thumbnailImageSrc:  "img/gallery/lavoro4.jpeg",
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: "img/gallery/lavoro5.jpeg",
            thumbnailImageSrc:  "img/gallery/lavoro5.jpeg",
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: "img/gallery/lavoro6.jpeg",
            thumbnailImageSrc:  "img/gallery/lavoro6.jpeg",
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: "img/gallery/lavoro7.jpeg",
            thumbnailImageSrc:  "img/gallery/lavoro7.jpeg",
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: "img/gallery/lavoro8.jpeg",
            thumbnailImageSrc:  "img/gallery/lavoro8.jpeg",
            alt: 'Description for Image 1',
            title: 'Title 1'
        }
      ]
    }
  },
  methods: {
    imageClick(index) {
        this.activeIndex = index;
        this.displayCustom = true;
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
            <a href="mailto:a.visalli@ekocasa.it?cc=s.pizzino@ekocasa.it&subject=Informazioni&body=Buongiorno ekocasa potrei avere maggiori informazioni in merito a..." target="_blank" class="btn-inv" style="margin-right: 16px;">
                <Button icon="pi pi-send b-icon" rounded severity="mail"/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=3407626126&text=Buongiorno ekocasa potrei avere maggiori informazioni in merito a..." target="_blank" class="btn-inv">
                <Button icon="pi pi-whatsapp b-icon" rounded severity="whattapp" />
            </a>      
        </template>
        <template #headerContent>
            <div class="header-content">
             Ekocasa è la soluzione se devi ristrutturare casa e non vuoi perdere tempo e ottimizzare i lavori. Vieni a trovarci per vedere le nostre offerte e i nostri servizi
            </div>
            <div class="header-call-to-action">
                <a href="mailto:a.visalli@ekocasa.it?cc=s.pizzino@ekocasa.it&subject=Informazioni&body=Buongiorno ekocasa potrei avere maggiori informazioni in merito a..." target="_blank" class="btn-inv" style="margin-right: 16px;">
                    <Button icon="pi pi-send b-icon" label="Contattaci" class="call-to-action" severity="ekocasa"></Button>
                </a>
            </div>
        </template>
    </HeaderCollapse>

    <section id="services" class="column">
        <div class="column center service-title">I nostri servizi</div>
        <div class="row center">
            <Card class="card">
                <template #title>
                     <i class="pi pi-home pi-service text-5xl"></i> 
                </template>
                <template #subtitle>Privati</template>
                <template #content>
                    Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.
                </template>
                <template #footer>
                    <a href="mailto:a.visalli@ekocasa.it?cc=s.pizzino@ekocasa.it&subject=Informazioni&body=Buongiorno ekocasa potrei avere maggiori informazioni in merito a..." target="_blank" class="btn-inv" style="margin-right: 16px;">
                        <Button label="Maggior informazioni" text class="service-btn" severity="eko-secondary"></Button>
                    </a>
                </template>
            </Card>
            <Card class="card">
                <template #title> 
                    <i class="pi pi-building pi-service text-5xl"></i>  
                    </template>
                <template #subtitle>Imprese</template>
                <template #content>
                    Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.
                </template>
                <template #footer>
                    <a href="mailto:a.visalli@ekocasa.it?cc=s.pizzino@ekocasa.it&subject=Informazioni&body=Buongiorno ekocasa potrei avere maggiori informazioni in merito a..." target="_blank" class="btn-inv" style="margin-right: 16px;">
                        <Button label="Maggior informazioni" text class="service-btn" severity="eko-secondary"></Button>
                    </a>
                </template>
            </Card>
        </div>
        
    </section>
    
    <section id="partner" class="row">
        <div class="partner-container row width-100 column wrap">  
            <div class="row center" style="background-image: url('img/partner/sanagostino.png')"></div>
            <div class="row center" style="background-image: url('img/partner/marca-corona.png')"></div>
            <div class="row center" style="background-image: url('img/partner/lea.png')"></div>
            <div class="row center" style="background-image: url('img/partner/fondovalle.png')"></div>
            <div class="row center" style="background-image: url('img/partner/moda.png')"></div>
            <div class="row center" style="background-image: url('img/partner/cavallino.png')"></div>
            <div class="row center" style="background-image: url('img/partner/biemme-tra.png')"></div>
            <div class="row center" style="background-image: url('img/partner/essenza-tra.png')"></div>
            <div class="row center" style="background-image: url('img/partner/bettio.png')"></div>
        </div> 
    </section>

    <section id="imagesDescription" class="row product">
        <ImageDescriptor img-url="img/card/pavimenti.jpeg">
            <template #out>Pavimenti</template>
            <template #inside>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </template>
        </ImageDescriptor>
        <ImageDescriptor img-url="img/card/rivestimenti.jpeg">
            <template #out>Rivestimenti</template>
            <template #inside>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </template>       </ImageDescriptor>
        <ImageDescriptor img-url="img/card/bagno.jpeg">
            <template #out>Bagno</template>
            <template #inside>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </template>        </ImageDescriptor>
        <ImageDescriptor img-url="img/card/porte.jpeg">
            <template #out>Porte</template>
            <template #inside>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </template>      </ImageDescriptor>
        <ImageDescriptor img-url="img/card/serramenti.jpeg">
            <template #out>Serramenti</template>
            <template #inside>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </template>       </ImageDescriptor>
    </section>

    <section id="videoWall">
      <VideoWall src="video/video.mp4">
        <template #overlay>
            <div class="video-wall-container">
                <div class="video-wall-title">SHOW ROOM</div>
                <div class="videowall-subtitle">Vieni a vedere il nostro spazio troverai nostro spazio troverai nostro spazio troverai nostro spazio troverai nostro spazio troverai </div>
            </div>
        </template>
      </VideoWall>
    </section>

    <section id="gallery" class="column center">
        <h2>I nostri lavori</h2>
        <Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="images" :responsiveOptions="responsiveOptions" :numVisible="7"
            containerStyle="max-width: 850px" :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
        </Galleria>

        <div v-if="images" class="grid-works">
            <div v-for="(image, index) of images" :key="index" class="img-container">
                <img :src="image.thumbnailImageSrc" :alt="image.alt" style="cursor: pointer" @click="imageClick(index)" class="work" />
            </div>
        </div>
    </section>

    <section id="maps">
        <GoogleMap api-key="AIzaSyBnK6JUSmdnAM_QRBHKmfmwDvTYgNxdstI" style="width: 70%; height: 500px" :center="center" :zoom="16">
            <Marker :options="{ position: center }"  />
        </GoogleMap>
        <div class="map-data column center">
            <div>Vieni a trovarci nel nostro show room </div>
            <a href="geo:45.6568905,9.0175174,18.84z;u=11" target="_blank"><i class="text-2xl mb-3 text-color-secondary pi pi-map-marker map-icon"></i></a>
        </div>
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

    #partner {
        padding: 0 150px 
    }

    #maps {
        padding-bottom: 0px;
    }

    .partner-container div {
        width: 15%;
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        border-bottom: 8px solid transparent;
    }
    .call-to-action {
        font-family: blairmditc !important;
        width: auto !important;
        background: var(--ekocasa-green);
        border-color: var(--ekocasa-green);
        font-size: 30px;
        margin-left: 200px;
        line-height: 60px;
    }
    .btn-text {

    }
    .video-wall-container {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        padding: 0 400px;
        flex-direction: column;
        color: #FFFFFF;
        text-align: center;
        text-shadow: -1px 0 var(--ekocasa-black), 0 1px var(--ekocasa-black), 1px 0 var(--ekocasa-black), 0 -1px var(--ekocasa-black) !important;
    }
    .video-wall-title {
        font-size: 40px;
        padding-bottom: 20px;
        width: 400px;
        
    }
    div.pi {
        margin-right: 20px;
    }
    .pi {
        color: var(--ekocasa-green);
        font-size: 30px;
    }
    .pi-service {
        font-size: 50px;
    }
    video {
        max-width: 100%;
        width: 100%;
        height: 600px;
    }
    .header-content {
        font-size: 30px;
        display: flex;
        text-shadow: -1px 0 var(--ekocasa-black), 0 1px var(--ekocasa-black), 1px 0 var(--ekocasa-black), 0 -1px var(--ekocasa-black);
        color: #FFFFFF;
        width: 50%;
        align-content: center;
        justify-content: center;
    }
    .header-call-to-action {
        width: 30%;
    }
    .card {
        font-family: blairmditc !important;
        width: 500px;
        height: 400px;
        padding: 32px;
        border-radius: 6px;
    }
    :deep(.p-card-body) {
        display: flex;
        flex-direction: column;
        align-items: center;
   }
    .card:nth-child(1) {
        margin-right: 24px;
    }
    .service-title {
        font-size: 40px;
        padding-bottom: 24px;
    }
    :deep(.p-card-subtitle) {
        font-size: 30px;
        font-weight: bold;
    }   
    :deep(.p-image-descriptor) {
        text-shadow: -1px 0 var(--ekocasa-black), 0 1px var(--ekocasa-black), 1px 0 var(--ekocasa-black), 0 -1px var(--ekocasa-black) !important;
    }
    section {
        padding: 80px 0;
        display: flex;
        justify-content: center;
    }
    .grid-works {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    .map-data {
        width: 30%; 
        height: 500px;
        background-color: var(--ekocasa-black);
        color: var(--ekocasa-green);
        text-align: center;
        font-size: 26px;
        padding: 60px;
        flex-wrap: nowrap !important;
    }
    .map-icon {
        font-size: 40px;
        padding-top: 20px;
        cursor: pointer;
    }
    .img-container {
        height: 400px;
        width: 400px;
        margin-right: 8px;
        margin-bottom: 8px;;
    }
    .work {
        height: 400px;
        width: 400px;
    }
    :deep(.p-card-content) {
        text-align: center;
    }
    .bc-grey {
        background-color: #CBCBCB;
    }
    .mission {
        width: 70%;
    }
    .width-100 {
        width: 100%;
    }
    .column {
        display: flex;
        flex-direction: column;
    }
    .row {
        display: flex;
        flex-direction: row;
    }
    .center {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .wrap {
        flex-wrap: wrap;
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
        background-image: var(--ekocasa-logo);
    }
    .partner-container div {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        height: 130px;
    }
    .p-footer {
        height: 250px;
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
        text-shadow: -1px 0 var(--ekocasa-black), 0 1px var(--ekocasa-black), 1px 0 var(--ekocasa-black), 0 -1px var(--ekocasa-black) !important;
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
    .b-icon {
        margin-right: 10px;
        height: 3rem !important;
        width: 3rem !important;
    }
    .service-btn {
        font-size: 24px;
    }
    :deep(.p-button .pi) {
        font-size: 30px;
    }

    @media screen and (max-width: 1050px) {
        
        .card:nth-child(1) {
            margin-right: 0;
            margin-bottom: 16px;
        }
    }

    @media screen and (max-width: 600px) {

        #maps {
            flex-direction: column;
        }

        #maps :first-child {
            width: 100% !important;
        }
        .map-data {
            width: 100%;
            height: 150px;
        }
        .video-wall-container {
            padding: 0;
        }
        .videowall-subtitle {
            display: none;
        }
        .partner-container div {
           width: 100%;
        }
        .p-image-descriptor {
            width: 100%  !important;
            margin-right: 0;
            margin-bottom: 0px;
        }
        .service-title {
            font-size: 30px;
        }

        .card {
            font-family: blairmditc !important;
            width: 400px;
            height: 400px;
            padding: 32px;
            border-radius: 6px;
        }
        :deep(.header-content) {
            width: 80%;
            text-align: center;
        }

        :deep(.header-call-to-action) {
            width: auto;
            margin-top: 60px;
        }
        .header-content {
            font-size: 22px;
        }
        .call-to-action {
            margin-left: 0;
        }

        :deep(.p-sub-header) {
            flex-direction: column;
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

    @media only screen and (min-width: 600px) and (max-width: 899px) {
        .partner-container div {
           width: 50%;
        }

        .video-wall-container {
            padding: 0;
        }

        #maps {
            flex-direction: column;
        }

        #maps :first-child {
            width: 100% !important;
        }

        .map-data {
            width: 100%;
            height: 150px;
        }
    }


    @media only screen and (min-width: 900px) and (max-width: 1199px) {
        
        .partner-container div {
           width: 33%;
        }
    }

    @media only screen and (min-width: 1201px) and (max-width: 1399px) {

        .partner-container div {
           width: 25%;
        }
    }

    @media only screen and (min-width: 601px) and (max-width: 1400px) {

        .videowall-title {
            display: none;
        }
  
        .videowall-subtitle {
            display: none;
        }
   
        :deep(.header-content) {
            width: 70%;
            text-align: center;
        }
        :deep(.header-call-to-action) {
            width: auto;
            margin-top: 60px;
        }    
        .header-content {
            font-size: 26px;
        }     
        .call-to-action {
            margin-left: 0;
        }

        :deep(.p-sub-header) {
            flex-direction: column;
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
