<template>
    <div class="hero-text">
        <h1>{{ title }}</h1>
        <p>{{ paragraph }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        paragraph: String,
    },
}
</script>

<style lang="scss" scoped>
.hero-text {
    background-image: url('~@/assets/img/pattern-circles.svg');
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 150px;

    h1 {
        color: $neutral-dark-desaturated-blue;
        margin-bottom: 7px;
        font-weight: $extra-bold;
    }

    p {
        color: $neutral-grayish-blue;
        font-size: 1rem;
    }
}
</style>
