<template>
    <header>
        <nav class="navbar navbar-light bg-faded">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    Zix Development
                </router-link>
                <ul class="nav navbar-nav pull-right">
                    <li v-for="menu of menus" class="nav-item">
                        <router-link :to="menu.url" class="nav-link">
                            {{ menu.name }}
                        </router-link>
                    </li>
                    <li v-if="!$store.state.authorized" class="nav-item">
                        <router-link to="/auth/login" class="nav-link">
                            {{ $t('auth.login') }}
                        </router-link>
                    </li>
                    <li v-if="!$store.state.authorized" class="nav-item">
                        <router-link to="/auth/register" class="nav-link">
                            {{ $t('auth.register') }}
                        </router-link>
                    </li>
                    <li v-if="$store.state.authorized" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="http://example.com" id="supportedContentDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img v-if="user && user.avatar" class="nav-profile-photo m-r-xs" :src="user.avatar">
                            <img v-else class="nav-profile-photo m-r-xs" src="https://www.gravatar.com/avatar/8798bd6307b5288654155f168d4288bf.jpg?s=200&amp;d=mm">
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="supportedContentDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <router-link to="/auth/logout" class="dropdown-item">
                                <i class="fa fa-sign-out"></i>
                                {{ $t('auth.logout') }}
                            </router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script type="text/babel">
    import Component from 'vue-class-component'

    @Component
    export default class Header {
        get menus() {
            return [
                {name: 'Home', url: '/'},
                {name: 'About Us', url: '/about-us'},
                {name: 'Contact Us', url: '/contact-us'},

            ];
        }

        get user() {
            return this.$store.state.user
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
    header {
        .nav-profile-photo {
            border: 2px solid #d3e0e9;
            border-radius: 50%;
            padding: 2px;
            height: 25px;
            width: 25px;
        }
    }
</style>
