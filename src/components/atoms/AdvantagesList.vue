<template>
    <ul class="advantages-list">
        <li class="advantages-list__item">{{ item1 }}</li>
        <li class="advantages-list__item">{{ item2 }}</li>
        <li class="advantages-list__item">{{ item3 }}</li>
    </ul>
</template>

<script>
export default {
    props: {
        item1: String,
        item2: String,
        item3: String,
    },
}
</script>

<style lang="scss" scoped>
.advantages-list {
    .advantages-list__item {
        line-height: 1.7rem;
        color: $neutral-grayish-blue;
        font-size: 0.8rem;

        &::before {
            content: url('~@/assets/img/icon-check.svg');
            margin-right: 10px;
        }
    }
}

@media only screen and (max-width: $mobile) {
    .advantages-list {
        margin-bottom: 35px;
        text-align: center;
    }
}
</style>
