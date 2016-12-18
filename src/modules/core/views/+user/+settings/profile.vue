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
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                            Select New Photo
                        </button>

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
        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">

                    <ul class="nav nav-tabs modal-header" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#select-image" role="tab">Select From My Images</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#upload-image" role="tab">Upload New One</a>
                        </li>
                    </ul>
                    <div class="modal-body">

                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div class="tab-pane" id="select-image" role="tabpanel">
                                <div class="row">
                                    <a href="javascript:void(0);" v-for="image in images"
                                       @click="selectAvatar(image)"
                                       class="col-md-3 text-md-center"
                                        style="height: 200px"
                                       :title="image.name"
                                    >
                                        <img :src="image.url"
                                             class="img-fluid img-thumbnail">
                                        <span >
                                            {{ image.name.substring(0, 10) }} ...
                                        </span>
                                    </a>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="tab-pane active" id="upload-image" role="tabpanel">
                                <form class="dropzone">
                                    <div class="fallback">
                                        <input name="file" type="file" multiple/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import Component from 'vue-class-component';
    import SettingSidebar from './setting-sidebar.vue';
    import Dropzone from 'dropzone';

    @Component({
        components: {
            SettingSidebar
        }
    })
    export default class ProfileSettings {
        data() {
            return {
                images: [],
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
            Dropzone.autoDiscover = false;
            new Dropzone('form.dropzone', {
                url:  this.$store.state.config.api_url + 'user/upload-avatar',
                dictDefaultMessage: "<strong class='text-center'>Drop New Image Here. </strong>",
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
                paramName: "avatar", // The name that will be used to transfer the file
                maxFilesize: 100, // MB,

                success: (response, server) => {
                    this.$store.state.user = server.data.user
                },

                error: (item, err) => {
                    console.log(err);
                    this.form.errors = err;
                }
            });

            this.getUserImages()
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

        getUserImages() {
            this.$http.get(this.$store.state.config.api_url + 'user/images')
                .then(response => {
                    this.images = response.data.data.images
                })
        }
        selectAvatar(image) {
            let param = {url: image.url}
            this.$http.post(this.$store.state.config.api_url + 'user/select-avatar', param)
                .then(response => {
                    this.$store.state.user = response.data.data.user
                });
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>
