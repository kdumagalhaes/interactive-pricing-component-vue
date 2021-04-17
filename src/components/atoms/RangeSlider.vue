<template>
    <div class="range">
        <label for="range">Choose the range views</label>
        <input
            id="range"
            type="range"
            name="range-slider"
            class="range-slider"
            v-model="rangeSlider"
            min="0"
            max="4"
            :style="{ backgroundImage: createBackgroundString }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            primarySoftCyan: 'hsl(174, 77%, 80%)',
            neutralLightGrayishBlue: 'hsl(224, 65%, 95%)',
        }
    },

    computed: {
        createBackgroundString() {
            return `linear-gradient(90deg, ${this.primarySoftCyan} ${
                (this.rangeSlider / 4) * 100
            }%, ${this.neutralLightGrayishBlue} ${
                (this.rangeSlider / 4) * 100
            }%)`
        },

        rangeSlider: {
            get() {
                return this.$store.state.rangeSlider
            },
            set(newValue) {
                return this.$store.dispatch(
                    'setViewsQuantityAndPrice',
                    newValue
                )
            },
        },
    },
}
</script>

<style lang="scss" scoped>
.range {
    width: 100%;

    label {
        visibility: hidden;
        position: absolute;
        left: -10000px;
    }

    .range-slider {
        -webkit-appearance: none;
        width: 100%;
        max-width: 500px;
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
}
</style>
