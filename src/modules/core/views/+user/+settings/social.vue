<template>
    <div class="container" style="margin-top: 50px;">
        <div class="row">
            <div class="col-md-3">
                <setting-sidebar></setting-sidebar>

            </div>
            <div class="col-md-9">
                <div class="card">
                    <div class="card-header">
                        Connect your social networks
                    </div>
                    <div class="card-block">
                        <button class="btn btn-primary">
                            Connect To Github
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import Component from 'vue-class-component'
    import SettingSidebar from './setting-sidebar.vue';

    @Component({
        components: {
            SettingSidebar
        }
    })
    export default class SocialSettings {
        created() {
            console.info('socials.vue Been Created')
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>
