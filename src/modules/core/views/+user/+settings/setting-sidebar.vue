<template>
    <div class="l-settings-sidebar">
        <div class="list-group">
            <a href="javascript:void(0);" class="list-group-item disabled">
                {{ $t('user.settings.index') }}
            </a>
            <router-link to="/user/settings/profile" class="list-group-item list-group-item-action">
                <i class="fa fa-pencil-square-o"></i>
                {{ $t('user.settings.profile') }}
            </router-link>
            <router-link to="/user/settings/security" class="list-group-item list-group-item-action">
                <i class="fa fa-lock"></i>
                {{ $t('user.settings.security') }}
            </router-link>
            <router-link to="/user/settings/social" class="list-group-item list-group-item-action">
                <i class="fa fa-share-alt"></i>
                {{ $t('user.settings.social') }}
            </router-link>


        </div>
    </div>
</template>

<script type="text/babel">
    import Component from 'vue-class-component'

    @Component
    export default class Name {
        mounted() {

        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .l-settings-sidebar {

    }
</style>
