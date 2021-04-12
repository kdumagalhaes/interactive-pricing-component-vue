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

    .billing-info--monthly,
    .billing-info--yearly {
        color: $neutral-grayish-blue;
    }

    .billing-info--monthly {
        margin-right: 20px;
    }

    .billing-info--yearly {
        margin-left: 20px;
    }

    .billing-info--discount {
        background: $primary-light-grayish-red;
        color: $primary-light-red;
        padding: 3px 7px;
        border-radius: 50px;
        font-size: 0.8rem;
        font-weight: $semi-bold;
        margin-left: 10px;
    }
}
</style>
