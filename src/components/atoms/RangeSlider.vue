<template>
    <input
        type="range"
        name="range-slider"
        class="range-slider"
        v-model="value"
        min="1"
        max="5"
        :style="{ backgroundImage: createBackgroundString }"
    />
</template>

<script>
export default {
    data() {
        return {
            value: this.$store.state.rangeSlider,
            primarySoftCyan: 'hsl(174, 77%, 80%)',
            neutralLightGrayishBlue: 'hsl(224, 65%, 95%)',
        }
    },

    computed: {
        createBackgroundString() {
            return `linear-gradient(90deg, ${this.primarySoftCyan} ${
                ((this.value - 1) / (5 - 1)) * 100
            }%, ${this.neutralLightGrayishBlue} ${
                ((this.value - 1) / (5 - 1)) * 100
            }%)`
        },
    },
}
</script>

<style lang="scss" scoped>
.range-slider {
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 50px;
    background: linear-gradient(
        90deg,
        $primary-soft-cyan 50%,
        $neutral-light-grayish-blue 50%
    );

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 40px;
        height: 40px;
        border-radius: 50px;
        background-color: $primary-strong-cyan;
        cursor: pointer;
        background-image: url('~@/assets/img/icon-slider.svg');
        background-repeat: no-repeat;
        background-position: center;
    }

    &:active::-webkit-slider-thumb {
        cursor: grabbing;
    }
}
</style>
