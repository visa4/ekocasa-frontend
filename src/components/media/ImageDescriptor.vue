<style scoped>
    .p-image-descriptor {
        display: block;
        position: relative;
        width: 400px;
        height: 900px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        color: #FFFFFF;
        cursor: pointer;
    }

    .overlay {
        display: block;
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #B5B0B0;
        opacity: 1;
        transition: opacity 1s ease-out;
        font-size: 28px;
    }

    .overlay-content {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .invisible {
        transition: opacity 1s ease-out;
        opacity: 0;
    }
</style>

<template>
    <div :class="buttonClass" @click="toggleOverlay">
        <slot name="out"></slot>
        <div id="overlay" class="overlay invisible">
            <div class="overlay-content">
                <slot name="inside"></slot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ImageDescriptor',
    props: {
        severity: {
            type: String,
            default: null
        },
        imgUrl: {
            type: String,
        }
    },
    watch: { // It listens to the change in prop name
        imgUrl: function (value) {
            this.$el.style.backgroundImage = `url("${this.imgUrl}")`;
        },
    },
    computed: {
        buttonClass() {
            return [
                'p-image-descriptor', 
                {
                    [`p-image-descriptor-${this.severity}`]: this.severity,
                }
        ]}
    },
    mounted() {
        this.$el.style.backgroundImage = `url("${this.imgUrl}")`;
    },
    methods: {
        toggleOverlay (evt) {
            let ele = this.$el.querySelector('#overlay');
            if (ele.classList.contains('invisible')) {
                ele.classList.remove("invisible");
            } else {
                ele.classList.add("invisible");
            }
        }
    }
}
</script>