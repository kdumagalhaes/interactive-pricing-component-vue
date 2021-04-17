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
    margin: 20px 0;

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

@media only screen and (max-width: $mobile) {
    .hero-text {
        h1 {
            font-size: 1.2rem;
        }
        p {
            text-align: center;
            width: 200px;
            line-height: 22px;
            font-size: 0.8rem;
        }
    }
}
</style>
