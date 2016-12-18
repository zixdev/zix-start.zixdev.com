<template>
    <div class="container" style="margin-top: 50px;">
        <div class="row">
            <div class="col-md-3">
                <setting-sidebar></setting-sidebar>

            </div>
            <div class="col-md-9">
                <div class="card">
                    <div class="card-header">
                        Update Password
                    </div>
                    <div class="card-block">
                        <form @submit.prevent="update()">
                            <div class="form-group row">
                                <div class="col-md-4 text-md-right col-form-label">
                                    <label for="current_password">Current Password :</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="password" class="form-control"
                                           v-model="password.current_password"
                                           id="current_password"
                                           placeholder="Enter Your Old Password ...">
                                    <span v-if="getError('current_password')" class="text-danger clearfix">{{ getError('current_password') }}</span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-4 text-md-right col-form-label">
                                    <label for="password">Password :</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="password" class="form-control"
                                           v-model="password.password"
                                           id="password"
                                           placeholder="Enter Your New Password ...">
                                    <span v-if="getError('password')" class="text-danger clearfix">{{ getError('password') }}</span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-4 text-md-right col-form-label">
                                    <label for="confirm_password">Confirm Password :</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="password" class="form-control"
                                           v-model="password.password_confirmation"
                                           id="confirm_password"
                                           placeholder="Confirm Your New Password...">
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary text-uppercase" :disabled="form.submitting">
                                        <i v-if="form.submitting" class="fa fa-spinner fa-pulse"></i>
                                        Update
                                    </button>
                                    <span v-if="getError('message')" class="text-success">
                                        {{ getError('message') }}
                                    </span>
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
    import SettingSidebar from './setting-sidebar.vue';

    @Component({
        components: {
            SettingSidebar
        }
    })
    export default class SecuritySettings {
        data() {
            return {
                password: {
                    current_password: '',
                    password: '',
                    password_confirmation: ''
                },
                form: {
                    submitting: false,
                    submitted: false,
                    errors: {}
                }
            };
        }
        mounted() {
            if (this.$route.query.setPassword) this.password.current_password = this.$route.query.setPassword;
        }

        getError(name) {
            return (this.form.errors && this.form.errors[name]) ? this.form.errors[name].toString() : false;
        }

        update() {
            this.form.submitting = true;
            this.$http.post(this.$store.state.config.api_url + 'user/change-password', this.password)
                .then(response => {
                    this.form.submitted = true;
                    this.form.submitting = false;
                    this.form.errors = {
                        message: response.data.data.message
                    };
                })
                .catch(error => {
                    this.form.submitted = true;
                    this.form.submitting = false;
                    this.form.errors = error.data;
                });
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>
