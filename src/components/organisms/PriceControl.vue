<template>
    <div class="price-control">
        <div class="price-control__values">
            <PageViews quantity="100k" />
            <Price value="$16.00" />
        </div>
        <div class="price-control__controls">
            <RangeSlider class="price-control__controls--slider" />
            <BillingInfo class="price-control__controls--billing-info" />
        </div>
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
    max-width: 590px;
    padding: 50px;
    margin: 50px;
    border-bottom: 1px solid $neutral-light-grayish-blue;

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
</style>
