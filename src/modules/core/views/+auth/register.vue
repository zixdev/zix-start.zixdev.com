<template>
    <div class="container l-login">
        <div class="row">

            <!--Second column-->
            <div class="col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-header text-md-center">
                        Create New Account
                    </div>
                    <div class="card-block">
                        <div v-if="form.errors && form.errors.message" class="alert alert-danger">
                            {{form.errors.message}}
                        </div>
                        <form @submit.prevent="register()">
                            <div class="form-group row">
                                <div class="col-md-4 text-md-right col-form-label">
                                    {{ $t('table.username') }} :
                                </div>
                                <div class="col-md-8">
                                    <input class="form-control"
                                           type="text"
                                           name="username"
                                           :placeholder="$t('table.username')"
                                           v-model="user.username"
                                           required
                                    >
                                    <span v-if="getError('username')" class="text-danger clearfix">{{ getError('username') }}</span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-4 text-md-right col-form-label">
                                    {{ $t('table.email') }} :
                                </div>
                                <div class="col-md-8">
                                    <input class="form-control"
                                           type="email"
                                           name="name"
                                           :placeholder="$t('table.email')"
                                           v-model="user.email"
                                           required
                                    >
                                    <span v-if="getError('email')" class="text-danger clearfix">{{ getError('email') }}</span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-4 text-md-right col-form-label">
                                    {{ $t('table.password') }} :
                                </div>
                                <div class="col-md-8">
                                    <input class="form-control"
                                           type="password"
                                           name="password"
                                           :placeholder="$t('table.password')"
                                           v-model="user.password"
                                           required
                                    >
                                    <span v-if="getError('password')" class="text-danger clearfix">{{ getError('password') }}</span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-4 text-md-right col-form-label">
                                    {{ $t('table.password_confirmation') }} :
                                </div>
                                <div class="col-md-8">
                                    <input class="form-control"
                                           type="password"
                                           :placeholder="$t('table.password_confirmation')"
                                           v-model="user.password_confirmation"
                                           required
                                    >
                                </div>
                            </div>
                            <div class="form-check row">
                                <div class="col-md-8 offset-md-4">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" v-model="user.accept_terms">
                                        {{$t('auth.accept_terms')}}
                                        <a href="javascript:void(0);">
                                            {{$t('auth.terms')}}
                                        </a>
                                    </label>
                                    <span v-if="getError('accept_terms')" class="text-danger clearfix"><br>{{ getError('accept_terms') }}</span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary" :disabled="form.submitting">
                                        <i v-if="form.submitting" class="fa fa-spinner fa-pulse"></i>
                                        <i v-else class="fa fa-check-circle"></i>
                                        {{$t('auth.register')}}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <!--/Second column-->
        </div>
    </div>


</template>

<script type="text/babel">
    import Component from 'vue-class-component'
    @Component
    export default class Register {
        data() {
            return {
                user: {},
                form: {
                    submitting: false,
                    submitted: false,
                    errors: {}
                }
            }
        }

        getError(name) {
            return (this.form.errors && this.form.errors[name]) ? this.form.errors[name].toString() : false;
        }

        register() {
            this.form.submitting = true;
            this.$http.post(this.$store.state.config.api_url + 'register', this.user)
                .then(response => {
                    let res = response.data.data;
                    localStorage.setItem('token', res.token);
                    this.$store.state.token = res.token;
                    this.$store.state.user = res.user;
                    this.form.submitted = true;

                    this.$store.state.authorized = true;
                    this.$router.push({name: 'home'});


                })
                .catch(error => {
                    this.form.errors = error.data;
                    this.form.submitting = false;
                    // if(error.status == 0) {
                    //     this.form.errors = {
                    //         message: 'Oops Couldn\'t connect to the server, please check your network.'
                    //     }
                    // }
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
