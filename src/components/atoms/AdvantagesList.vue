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
        line-height: 1.8rem;
        color: $neutral-grayish-blue;

        &::before {
            content: url('~@/assets/img/icon-check.svg');
            margin-right: 10px;
        }
    }
}
</style>
