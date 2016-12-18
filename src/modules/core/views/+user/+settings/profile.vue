<template>
    <div class="container" style="margin-top: 50px;">
        <div class="row">
            <div class="col-md-3">
                <setting-sidebar></setting-sidebar>

            </div>
            <div class="col-md-9">
                <div class="card">
                    <div class="card-header">
                        Profile Photo
                    </div>
                    <div class="card-block text-md-center">
                        <img width="150px" v-if="$store.state.user && $store.state.user.avatar" class="img-thumbnail ounded mx-auto d-block" :src="$store.state.user.avatar">
                        <img v-else class="img-responsive" src="https://www.gravatar.com/avatar/8798bd6307b5288654155f168d4288bf.jpg?s=200&amp;d=mm">
                        <br>
                        <a href="#" class="btn btn-primary text-uppercase">Upload New Photo</a>
                    </div>
                    <div class="card-block">
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        Account Information
                    </div>
                    <div class="card-block">
                       <form @submit.prevent="updateProfile()">
                           <div class="form-group row">
                               <div class="col-md-4 text-md-right col-form-label">
                                   <label for="username">Username :</label>
                               </div>
                               <div class="col-md-8">
                                   <input type="text" v-model="user.username" class="form-control" id="username"  placeholder="Enter Your Username ...">
                                   <span v-if="getError('username')" class="text-danger clearfix">{{ getError('username') }}</span>
                               </div>
                           </div>
                           <div class="form-group row">
                               <div class="col-md-4 text-md-right col-form-label">
                                   <label for="email">Email address:</label>
                               </div>
                               <div class="col-md-8">
                                   <input type="email" v-model="user.email" class="form-control" id="email"  placeholder="Enter Your Email Address ...">
                                   <span v-if="getError('email')" class="text-danger clearfix">{{ getError('email') }}</span>
                               </div>
                           </div>
                           <div class="form-group row">
                               <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary text-uppercase" :disabled="form.submitting">
                                        <i v-if="form.submitting" class="fa fa-spinner fa-pulse"></i>
                                        <i v-else class="fa fa-edit"></i>
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
    import Component from 'vue-class-component';
    import SettingSidebar from './setting-sidebar.vue';

    @Component({
        components: {
            SettingSidebar
        }
    })
    export default class ProfileSettings {
        data() {
            return {
                form: {
                    submitting: false,
                    submitted: false,
                    errors: {}
                }
            }
        }
        get user() {
            return this.$store.state.user;
        }
        mounted() {
            console.info('profile.vue Been Created')
        }

        getError(name) {
            return (this.form.errors && this.form.errors[name]) ? this.form.errors[name].toString() : false;
        }

        updateProfile() {
            this.form.submitting = true;
            this.form.errors = {};

            let user = {
                username: this.user.username,
                email: this.user.email
            }
            this.$http.post(this.$store.state.config.api_url + 'user', user)
                .then(response => {
                    this.$store.state.user = response.data.data.user
                    this.form.errors = {
                        message: response.data.data.message
                    };
                    this.form.submitting = false;
                })
                .catch(error => {
                    this.form.errors = error.data;
                    this.form.submitting = false;
                });
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>
