<template>
    <div>
        <pre>
            {{ $route.query.token | json }}
        </pre>
    </div>
</template>

<script type="text/babel">
    import Component from 'vue-class-component'

    @Component
    export default class Name {
        mounted() {
            localStorage.setItem('token', this.$route.query.token);
            this.$store.state.token = this.$route.query.token;

            this.$http.get(this.$store.state.config.api_url + 'user')
                .then(
                    res => {
                        this.$store.state.authorized = true;
                        this.$store.state.user = res.data.data.user;
                        return this.$router.push({name: 'home'});
                    }
                )
                .catch(err => {
                    localStorage.removeItem('token');
                    this.$router.push({name: 'auth.logout'});
                    return this.$store.state.authorized = false;
                });
        }
    }

</script>
<style lang="scss" rel="stylesheet/scss">

</style>
