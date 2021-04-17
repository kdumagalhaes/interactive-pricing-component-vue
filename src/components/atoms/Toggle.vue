<template>
    <label class="toggle">
        <input
            class="toggle__input"
            type="checkbox"
            name="toggle"
            v-model="checked"
            @change="setDiscount"
        />
        <span class="toggle__slider"></span>
    </label>
</template>

<script>
export default {
    data() {
        return {
            checked: this.$store.state.checked,
        }
    },

    methods: {
        setDiscount() {
            this.$store.dispatch('setDiscount', this.checked)
        },
    },
}
</script>

<style lang="scss" scoped>
.toggle {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 22px;

    .toggle__input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .toggle__slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: $neutral-medium-grayish-blue;
        transition: 0.4s;
        border-radius: 50px;

        &::before {
            position: absolute;
            content: '';
            height: 16px;
            width: 16px;
            left: 4px;
            bottom: 3px;
            background-color: white;
            transition: 0.4s;
            border-radius: 50px;
        }
    }

    .toggle__input:checked + .toggle__slider {
        background-color: $primary-strong-cyan;
    }

    .toggle__input:checked + .toggle__slider::before {
        transform: translateX(26px);
    }
}
</style>
