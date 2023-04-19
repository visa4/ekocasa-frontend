<style scoped>
    .p-video-wall {
        display: block;
        position: relative;
        width: 100%;
        height: 600px;
        overflow: hidden;
    }

    video {
        position: absolute;
        object-fit: cover;
        inset: 0px auto auto;
    }

    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
    }

</style>

<template>
    <div class="p-video-wall">
        <video :src="src" autoplay loop muted></video>
        <div class="overlay">
            <slot name="overlay"></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'VideoWall',
    props: {
        src: {
            
        }
    },
    mounted() {

        this._calcVideoSize();

        window.addEventListener(
            'resize', 
            this._calcVideoSize.bind(this), 
            true
        );
        
    },
    methods: {
        _calcVideoSize() {
            let width = this.$el.offsetWidth;
            let heightComputed = Math.round((width/16) * 9);
            let height = heightComputed > this.$el.offsetHeight ? heightComputed : this.$el.offsetHeight;
            //this.$el.style.backgroundImage = `url("${this.imgUrl}")`;

            let video = this.$el.querySelector('video');
            video.style.height = height + 'px';
            video.style.width = width + 'px';

            if(height >  this.$el.offsetHeight) {
                let widthTransform = (height - this.$el.offsetHeight) / 2;
                console.log('ff', widthTransform);
                video.style.transform = `translateY(-${widthTransform}px)`;
            } else {
                video.style.transform = `none`;
            }
            
        }
    }
};

</script>