<template>
    <div class="billing-info">
        <p class="billing-info--monthly">Monthly Billing</p>
        <Toggle />
        <p class="billing-info--yearly">Yearly Billing</p>
        <p class="billing-info--discount">25% discount</p>
    </div>
</template>

<script>
//atoms
import { Toggle } from '@/components/atoms'
export default {
    components: {
        Toggle,
    },
}
</script>

<style lang="scss" scoped>
.billing-info {
    display: flex;
    align-items: center;
    font-size: 0.8rem;

    .billing-info--monthly,
    .billing-info--yearly {
        color: $neutral-grayish-blue;
    }

    .billing-info--monthly {
        margin-right: 15px;
    }

    .billing-info--yearly {
        margin-left: 15px;
    }

    .billing-info--discount {
        background: $primary-light-grayish-red;
        color: $primary-light-red;
        padding: 3px 7px;
        border-radius: 50px;
        font-size: 0.6rem;
        font-weight: $extra-bold;
        margin-left: 10px;
    }
}
</style>
