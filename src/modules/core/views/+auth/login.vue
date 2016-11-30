<template>
    <div class="view hm-black-strong">
        <div class="full-bg-img flex-center">
            <div class="container">
                <div class="row">

                    <!--First column-->
                    <div class="col-lg-6 hidden-sm-down">
                        <div class="description">
                            <h3 class="h3-responsive wow fadeInLeft">
                                Welcome to <b>Zix</b> Development!
                            </h3>
                            <hr class="hr-dark wow fadeInLeft">
                            <p class="wow fadeInLeft" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae, quisquam iste, maiores. Nulla.</p>
                            <br>
                            <a class="btn btn-comm btn-lg wow fadeInLeft waves-effect waves-light" data-wow-delay="0.7s">Learn more</a>
                        </div>
                    </div>
                    <!--/.First column-->

                    <!--Second column-->
                    <div class="col-lg-6" >
                        <div class="card">
                            <div class="card-block">


                                <div v-if="form.errors && form.errors.message" class="alert alert-danger">
                                    {{form.errors.message}}
                                </div>
                                <form @submit.prevent="login()">
                                    <div class="md-form">
                                        <i class="fa fa-envelope prefix"></i>
                                        <input class="form-control"
                                               type="email"
                                               name="name"
                                               :placeholder="$t('auth.email')"
                                               v-model="user.email"
                                               required
                                               id="userEmail"
                                        >
                                        <label class="" for="userEmail">Enter E-mail Address</label>
                                    </div>
                                    <div class="input-group m-b">
                                        <span class="input-group-addon">
                                            <i class="fa fa-lock"></i>
                                        </span>
                                        <input class="form-control"
                                               type="password"
                                               name="password"
                                               :placeholder="$t('auth.password')"
                                               v-model="user.password"
                                               required
                                        >
                                    </div>
                                    <button type="submit" class="btn btn-primary block full-width m-b">
                                        <i v-if="form.submitting" class="fa fa-spinner fa-pulse"></i>
                                        {{$t('auth.login')}}
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                    <!--/Second column-->
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Component from 'vue-class-component'
    import AppState from '../../../../store';
    @Component
    export default class Login {
        data() {
            return {
                user: {
                    email:'',
                    password: ''
                },
                form: {
                    submitting: false,
                    submitted: false,
                    errors: {}
                }
            }
        }

        login() {
            this.form.submitting = true;
            this.$http.post(this.$store.state.config.api_url + 'login', this.user)
                .then(response => {
                    let res = response.data.data;
                    if (res.permissions.includes('full_access') || res.permissions.includes('view_admin')) {
                        localStorage.setItem('token', res.token);
                        this.$store.state.token = res.token;
                        this.$store.state.user = res.user;
                        this.form.submitted = true;

                        this.$store.state.authorized = true;
                        this.$router.push({name: 'Dashboard'});

                        return true;
                    }
                    this.form.errors = {
                        message: 'Oops Looks Like you don\'t have access to the admin panel'
                    };
                    this.form.submitting = false;
                    return false;
                })
                .catch(error => {
                        this.form.errors = error.data;
                        this.form.submitting = false;
                });
        }
    }
</script>
<style lang="scss">
    .full-bg-img {
        color: #FFFFFF;
        font-size: 16px;

        .form-control, .input-group-addon {
            background-color: transparent;
            &:focus {
                border-color: #a21d21 !important;
            }
        }

        .container {
            position: relative;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .btn-primary {
            background-color: #a21d21;
            border-color: #a21d21;
            &:hover, &:focus, &:active {
                background-color: #db2c31;
                border-color: #db2c31;
            }
        }

        .alert-danger {
            background-color: transparent;
            border-color: #a21d21;
            border-radius: 0;
            color: #FFFFFF;

        }

        .list-unstyled {
            min-height: 420px;
        }
    }


    // new
    .view {
        background: url("../../../../assets/backgrounds/img-25.jpg") no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    @media (max-width: 768px) {
        .full-bg-img,
        .view {
            height: auto;
            position: relative;
        }
    }

    .description {
        background-color: rgba(0,0,0, 0.3);
        padding: 2rem;
        margin-bottom: 2rem;
        color: #fff
    }

    @media (max-width: 992px) {
        .description {
            padding-top: 7rem;
            text-align: center;
        }
    }


    @media (max-width: 768px) {
        .full-bg-img {
            padding-top: 10px;
        }
    }

</style>
