<template>
    <div>
        <br>
        <br>
        <br>
        <br>

    </div>
</template>
<script type="text/babel">
    import Component from 'vue-class-component'
    import Vue from "vue";

    @Component
    export default class Home {
        created() {

        }

        change() {
            Vue.config.lang = 'ar';
        }
    }

</script>
<style>
    /* Carousel*/

.carousel,
.carousel-item,
.active {
    height: 600px;
}

.carousel-inner {
    height: 100%;
}

.carousel-item:nth-child(1) {
    background-image: url("http://mdbootstrap.com/images/regular/nature/img%20(54).jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

.carousel-item:nth-child(2) {
    background-image: url("http://mdbootstrap.com/images/regular/nature/img%20(4).jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

.carousel-item:nth-child(3) {
    background-image: url("http://mdbootstrap.com/images/regular/nature/img%20(3).jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
/*Caption*/

.flex-center {
    color: #fff;
}

@media (min-width: 776px) {
    .carousel .view ul li {
        display: inline;
    }
    .carousel .view .full-bg-img ul li .flex-item {
        margin-bottom: 1.5rem;
    }
}

</style>
