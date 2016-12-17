<template>
    <div class="container" style="margin-top: 50px;">
        <div class="text-md-center">
            <div v-if="loading">
                <h2>
                    Activating Your Account Please Wait
                </h2>
                <br>
                <i class="fa fa-spinner fa-spin fa-5x"></i>
            </div>
            <div v-else>
                <h2>
                    Your Account Was Successfully Activated
                </h2>
                <router-link to="/" class="btn btn-primary">
                    <i class="fa fa-home"></i>
                    Home
                </router-link>
                <router-link to="/user/settings/profile" class="btn btn-primary">
                    <i class="fa fa-cog"></i>
                    Account Settings
                </router-link>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import Component from 'vue-class-component'

    @Component
    export default class AccountActivate {
        data() {
            return {
                loading: true
            }
        }

        mounted() {
            let code = this.$route.params.code
            this.$http.post(this.$store.state.config.api_url + 'user/account/activate', {code})
                .then(response => {
                    this.loading = false
                })
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>
