<template>
    <div class="price">
        <span class="price__value"> ${{ $store.state.price }}.00 </span>
        / month
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.price {
    display: flex;
    align-items: center;
    color: $neutral-grayish-blue;
    font-weight: $semi-bold;

    .price__value {
        font-size: 2.8rem;
        font-weight: $extra-bold;
        color: $neutral-dark-desaturated-blue;
        margin-right: 5px;
    }
}
</style>
