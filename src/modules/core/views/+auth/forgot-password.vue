<template>
    <div class="container" style="margin-top: 50px;">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="alert alert-info">
                    <strong>
                        Oops,
                    </strong>
                    Looks like an account with same your email address already been registered, <br>
                    Did you forgot you password ?
                </div>
                <div class="card">
                    <div class="card-header">
                        Reset Password
                    </div>
                    <div class="card-block">

                        <form @submit.prevent="reset()">
                            <div class="form-group row">
                                <div class="col-md-4 text-md-right col-form-label">
                                    <label for="email">Email address:</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="email" v-model="user.email" class="form-control" id="email"  placeholder="Enter Your Email Address ...">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary text-uppercase">
                                        Sent Password Reset Link
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import Component from 'vue-class-component'

    @Component
    export default class ForgotPassword {
        data() {
            return {
                user: {
                    email: ''
                }
            }
        }
        mounted() {
            if (this.$route.query.email) this.user.email = this.$route.query.email;
        }

        reset() {
            this.$http.post(this.$store.state.config.api_url + 'forgot-password', this.user)
                .then(response => {

                })
                .catch(error => {

                })
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>
