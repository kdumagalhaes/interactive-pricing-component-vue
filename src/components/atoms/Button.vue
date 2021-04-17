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
    padding: 0 55px;
    background-color: $neutral-dark-desaturated-blue;
    color: $neutral-medium-grayish-blue;
    border: none;
    border-radius: 50px;
    font-weight: $semi-bold;
    transition: color 0.4s;
    height: 45px;

    &:hover {
        color: $neutral-very-pale-blue;
    }
}

@media only screen and (max-width: $mobile) {
    .button-tag {
        padding: 0 45px;
        font-size: 0.7rem;
        height: 40px;
    }
}
</style>
