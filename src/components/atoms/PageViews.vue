<template>
    <p class="page-views">{{ $store.state.viewsQuantity }} pageviews</p>
</template>

<style lang="scss" scoped>
.page-views {
    text-transform: uppercase;
    font-weight: $extra-bold;
    color: $neutral-grayish-blue;
    letter-spacing: 2px;
    font-size: 1rem;
}
</style>
