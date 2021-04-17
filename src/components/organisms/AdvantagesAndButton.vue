<template>
    <div class="advantages-and-button">
        <AdvantagesList
            item1="Unlimited websites"
            item2="100% data ownership"
            item3="Email reports"
        />
        <Button text="Start my trial" />
    </div>
</template>

<script>
// atoms
import { AdvantagesList, Button } from '@/components/atoms'

export default {
    components: {
        AdvantagesList,
        Button,
    },
}
</script>

<style lang="scss" scoped>
.advantages-and-button {
    width: 100%;
    max-width: 600px;
    padding: 30px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media only screen and (max-width: $mobile) {
    .advantages-and-button {
        flex-direction: column;
        justify-content: center;
    }
}
</style>
