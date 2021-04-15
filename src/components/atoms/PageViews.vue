<template>
    <p class="page-views">{{ $setViewsQuantity }} pageviews</p>
</template>

<script>
export default {
    computed: {
        $setViewsQuantity() {
            return this.$store.getters.$setViewsQuantity
        },
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
