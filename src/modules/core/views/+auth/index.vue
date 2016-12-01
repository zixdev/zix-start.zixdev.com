<template>
    <!--Mask-->
    <div class="view hm-black-strong">
        <div class="full-bg-img flex-center">
            <div class="container">
                <div class="row">

                    <!--First column-->
                    <div class="col-lg-6 hidden-sm-down">
                        <div class="description">
                            <h3 class="h3-responsive wow fadeInLeft">
                                Welcome to <b>Zix</b> Development!
                            </h3>
                            <hr class="hr-dark wow fadeInLeft">
                            <p class="wow fadeInLeft" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae, quisquam iste, maiores. Nulla.</p>
                            <br>
                            <a class="btn btn-comm btn-lg wow fadeInLeft waves-effect waves-light" data-wow-delay="0.7s">Learn more</a>
                        </div>
                    </div>
                    <!--/.First column-->

                    <!--Second column-->
                    <div class="col-lg-6" >

                        <transition mode="out-in"
                                    enter-active-class="fadeIn"
                                    leave-active-class="fadeOut"
                                    appear
                        >
                            <router-view class="animated"></router-view>
                        </transition>

                    </div>
                    <!--/Second column-->
                </div>
            </div>
        </div>
    </div>
    <!--/Mask-->

</template>

<script type="text/babel">
    import Component from 'vue-class-component'

    @Component
    export default class Index {
        created() {
            console.info('index.vue Been Created')
        }
    }
</script>
<style>
    .view {
        background: url("../../../../assets/backgrounds/img-25.jpg") no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    @media (max-width: 768px) {
        .full-bg-img,
        .view {
            height: auto;
            position: relative;
        }
    }

    .description {
        background-color: rgba(0,0,0, 0.3);
        padding: 2rem;
        margin-bottom: 2rem;
        color: #fff
    }

    @media (max-width: 992px) {
        .description {
            padding-top: 7rem;
            text-align: center;
        }
    }


    @media (max-width: 768px) {
        .full-bg-img {
            padding-top: 10px;
        }
    }

</style>
