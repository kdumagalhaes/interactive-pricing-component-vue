<template>
    <div class="price-control">
        <div class="price-control__values">
            <PageViews />
            <Price />
        </div>
        <div class="price-control__controls">
            <RangeSlider class="price-control__controls--slider" />
            <BillingInfo class="price-control__controls--billing-info" />
        </div>
    </div>
    <div class="price-control--mobile">
        <PageViews class="price-control--mobile__page-views" />
        <RangeSlider class="price-control--mobile__slider" />
        <Price class="price-controle--mobile__price" />
        <BillingInfo class="price-control--mobile__billing-info" />
    </div>
</template>

<script>
// atoms
import { PageViews, Price, RangeSlider } from '@/components/atoms'

// molecules
import { BillingInfo } from '@/components/molecules'

export default {
    components: {
        PageViews,
        Price,
        RangeSlider,
        BillingInfo,
    },
}
</script>

<style lang="scss" scoped>
.price-control {
    padding: 50px;
    border-bottom: 1px solid $neutral-light-grayish-blue;
    display: block;

    .price-control__values {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }

    .price-control__controls {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .price-control__controls--slider {
            margin-bottom: 50px;
        }

        .price-control__controls--billing-info {
            margin: 0 40px 0 0;
        }
    }
}

.price-control--mobile {
    display: none;
}

@media only screen and (max-width: $mobile) {
    .price-control {
        display: none;
    }
    .price-control--mobile {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        .price-control--mobile__page-views,
        .price-control--mobile__slider,
        .price-controle--mobile__price {
            margin-bottom: 30px;
        }
    }
}
</style>
