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
                        <form>
                            <div class="form-group row">
                                <div class="col-md-4 text-md-right col-form-label">
                                    <label for="current_password">Current Password :</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="password" class="form-control"
                                           v-model="password.old_password"
                                           id="current_password"
                                           placeholder="Enter Your Old Password ...">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-4 text-md-right col-form-label">
                                    <label for="password">Password :</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="password" class="form-control" id="password"  placeholder="Enter Your New Password ...">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-4 text-md-right col-form-label">
                                    <label for="confirm_password">Confirm Password :</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="password" class="form-control" id="confirm_password"  placeholder="Confirm Your New Password...">
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary text-uppercase">
                                        Update
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
                    old_password: '',
                    password: '',
                    confirm_password: ''
                }
            };
        }
        mounted() {
            if (this.$route.query.setPassword) this.password.old_password = this.$route.query.setPassword;
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>
