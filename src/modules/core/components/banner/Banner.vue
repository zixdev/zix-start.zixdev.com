<template>
    <div id="carousel-example-1" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
        <!--Indicators-->
        <ol class="carousel-indicators">
            <li data-target="#carousel-example-1" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-1" data-slide-to="1"></li>
            <li data-target="#carousel-example-1" data-slide-to="2"></li>
        </ol>
        <!--/.Indicators-->

        <!--Slides-->
        <div class="carousel-inner" role="listbox">

            <!--First slide-->
            <div class="carousel-item active">
                <!--Mask-->
                <div class="view hm-black-light">
                    <div class="full-bg-img flex-center">
                        <ul class="animated fadeInUp col-md-12">
                            <li>
                                <h1 class="h1-responsive flex-item">Your Service Title Here !</h1>
                            </li>
                            <li>
                                <p class="flex-item">your service description</p>
                            </li>

                        </ul>
                    </div>
                </div>
                <!--/.Mask-->
            </div>
            <!--/.First slide-->

            <!--Second slide -->
            <div class="carousel-item">
                <!--Mask-->
                <div class="view hm-black-light">
                    <div class="full-bg-img flex-center">
                        <ul class="animated fadeInUp col-md-12">
                            <li>
                                <h1 class="h1-responsive flex-item">Your Second Service  Title Here !</h1>
                            </li>
                            <li>
                                <p class="flex-item">your service description</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--/.Mask-->
            </div>
            <!--/.Second slide -->

            <!--Third slide-->
            <div class="carousel-item">
                <!--Mask-->
                <div class="view hm-black-light">
                    <div class="full-bg-img flex-center">
                        <ul class="animated fadeInUp col-md-12">
                            <li>
                                <h1 class="h1-responsive flex-item">Your Third Service Title Here !</h1>
                            </li>
                            <li>
                                <p class="flex-item">your service description</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--/.Mask-->
            </div>
            <!--/.Third slide-->
        </div>
        <!--/.Slides-->

        <!--Controls-->
        <a class="left carousel-control" href="#carousel-example-1" role="button" data-slide="prev">
            <span class="icon-prev" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel-example-1" role="button" data-slide="next">
            <span class="icon-next" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        <!--/.Controls-->
    </div>
</template>

<script type="text/babel">
    import Component from 'vue-class-component'

    @Component
    export default class Name {
        created() {
            console.info('Banner.vue Been Created')
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>
