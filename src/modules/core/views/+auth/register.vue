<template>
    <div class="container l-login">
        <div class="row">

            <!--Second column-->
            <div class="col-lg-6 offset-lg-3">
                <div class="card">
                    <div class="card-block">
                        <div v-if="form.errors && form.errors.message" class="alert alert-danger">
                            {{form.errors.message}}
                        </div>
                        <form @submit.prevent="register()">
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="fa fa-edit"></i>
                                </span>
                                <input class="form-control"
                                       type="text"
                                       name="username"
                                       :placeholder="$t('table.username')"
                                       v-model="user.username"
                                       required
                                >
                            </div>
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="fa fa-envelope"></i>
                                </span>
                                <input class="form-control"
                                       type="email"
                                       name="name"
                                       :placeholder="$t('table.email')"
                                       v-model="user.email"
                                       required
                                >
                            </div>
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
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="user.accept_terms">
                                    {{$t('auth.accept_terms')}}
                                    <a href="javascript:void(0);">
                                        {{$t('auth.terms')}}
                                    </a>
                                </label>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">
                                    <i v-if="form.submitting" class="fa fa-spinner fa-pulse"></i>
                                    <i v-else class="fa fa-check-circle"></i>
                                    {{$t('auth.register')}}
                                </button>
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
                    if(error.status == 0) {
                        this.form.errors = {
                            message: 'Oops Couldn\'t connect to the server, please check your network.'
                        }
                    }
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
