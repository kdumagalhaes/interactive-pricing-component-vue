<template>
    <main class="main-content">
        <HeroText
            title="Simple, traffic-based pricing"
            paragraph="Sign-up for our 30-day trial. No credit card required."
        />
        <div class="main-content--price-module">
            <PriceControl />
            <AdvantagesAndButton />
        </div>
    </main>
</template>

<script>
// atoms
import { HeroText } from '@/components/atoms'

// organisms
import { PriceControl, AdvantagesAndButton } from '@/components/organisms'

export default {
    components: {
        HeroText,
        PriceControl,
        AdvantagesAndButton,
    },
}
</script>

<style lang="scss" scoped>
.main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    margin-bottom: 30px;

    .main-content--price-module {
        background-color: $neutral-very-pale-blue;
        width: 100%;
        max-width: 590px;
        border-radius: 10px;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
}

@media only screen and (max-width: $mobile) {
    .main-content {
        .main-content--price-module {
            max-width: 320px;
            padding: 20px;
        }
    }
}
</style>
