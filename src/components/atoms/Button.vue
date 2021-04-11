<template>
    <button class="button-tag">{{ text }}</button>
</template>

<script>
export default {
    props: {
        text: String,
    },
}
</script>

<style lang="scss" scoped>
.button-tag {
    padding: 12px 45px;
    background-color: $neutral-dark-desaturated-blue;
    color: $neutral-medium-grayish-blue;
    border: none;
    border-radius: 50px;
    font-weight: $semi-bold;
    transition: color 0.4s;

    &:hover {
        color: $neutral-very-pale-blue;
    }
}
</style>
