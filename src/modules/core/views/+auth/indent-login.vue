<template>
    <div class="container l-login">
        <section v-if="set_password" class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card">

                    <form class="card-block" @submit.prevent="resetPassword()">
                        <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="fa fa-lock"></i>
                                </span>
                            <input class="form-control"
                                   type="password"
                                   name="password"
                                   :placeholder="$t('table.password')"
                                   v-model="user.password"
                                   required
                            >
                        </div>
                        <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="fa fa-lock"></i>
                                </span>
                            <input class="form-control"
                                   type="password"
                                   :placeholder="$t('table.password_confirmation')"
                                   v-model="user.password_confirmation"
                                   required
                            >
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">
                                <i v-if="form.submitting" class="fa fa-spinner fa-pulse"></i>
                                <i v-else class="fa fa-sign-in"></i>
                                {{$t('auth.reset-password')}}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section v-else>
            Loading
        </section>
    </div>
</template>

<script type="text/babel">
    import Component from 'vue-class-component'

    @Component
    export default class IndentLogin {
        data() {
            return {
                set_password: null,
                user: {},
                form: {
                    submitting: false,
                    submitted: false,
                    errors: {}
                }
            }
        }
        mounted() {
            localStorage.setItem('token', this.$route.query.token);
            this.$store.state.token = this.$route.query.token;
            this.login();

        }

        login() {
            this.$http.get(this.$store.state.config.api_url + 'user')
                .then(
                    res => {
                        this.$store.state.authorized = true;
                        this.$store.state.user = res.data.data.user;
                        // if the user been redirected to login, redirect to the indented route.
                        if (!this.$route.query.setPassword)
                            return this.$router.push({name: 'home'});
                        return this.$router.push({name: 'user.settings.security', query: {setPassword: this.$route.query.setPassword}});
                    }
                )
                .catch(err => {
                    localStorage.removeItem('token');
                    this.$router.push({name: 'auth.logout'});
                    return this.$store.state.authorized = false;
                });
        }


        resetPassword() {
            this.form.submitting = true;
            // this.user.
            this.$http.post(this.$store.state.config.api_url + 'user/change-password', this.user)
                .then(response => {
                    console.info(response)
                })
                .catch(response => {
                    console.log(response)
                });
        }
    }

</script>
<style lang="scss">
    .l-login {
        margin-top: 50px;

        .input-group {
            margin-bottom: 15px;
            .input-group-addon {
                width: 45px;
            }
        }

    }
</style>
