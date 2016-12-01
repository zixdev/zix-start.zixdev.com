<template>
    <header>
        <!--Navbar-->
        <nav class="navbar navbar-dark default-color">
        <!--<nav class="navbar navbar-fixed-top scrolling-navbar navbar-dark default-color">-->

            <!-- Collapse button-->
            <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapseEx">
                <i class="fa fa-bars"></i>
            </button>

            <div class="container">

                <!--Collapse content-->
                <div class="collapse navbar-toggleable-xs" id="collapseEx">
                    <!--Navbar Brand-->
                    <a class="navbar-brand" href="/">
                        <b>Zix</b> Development
                    </a>
                    <!--Links-->
                    <ul class="nav navbar-nav pull-right">
                        <li v-for="menu of menus" class="nav-item">
                            <router-link :to="menu.url" class="nav-link">
                                {{ menu.name }}
                            </router-link>
                        </li>

                    </ul>
                </div>
                <!--/.Collapse content-->

            </div>

        </nav>
        <!--/.Navbar-->

    </header>
</template>

<script type="text/babel">
    import Component from 'vue-class-component'

    @Component
    export default class Header {
        get menus() {
            return [
                {name: 'Home', url: '/'},
                {name: 'Login', url: '/auth/login'},
                {name: 'Register', url: '/auth/register'},
            ];
        }

        changeLang(lang) {
            $('#wrapper').fadeOut();
            setTimeout(() => {
                Vue.config.lang = lang;
                $('#wrapper').fadeIn();
            }, 500);
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>
