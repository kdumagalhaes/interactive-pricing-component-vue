<template>
    <p class="page-views">{{ quantity }} pageviews</p>
</template>

<script>
export default {
    props: {
        quantity: Number,
    },
}
</script>

<style lang="scss" scoped>
.page-views {
    text-transform: uppercase;
    font-weight: $extra-bold;
    color: $neutral-grayish-blue;
    letter-spacing: 2px;
    font-size: 1rem;
}
</style>
