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
                        Contact Information
                    </div>
                    <div class="card-block">
                       <form>
                           <div class="form-group row">
                               <div class="col-md-4 text-md-right col-form-label">
                                   <label for="username">Username :</label>
                               </div>
                               <div class="col-md-8">
                                   <input type="text" class="form-control" id="username"  placeholder="Enter Your Username ...">
                               </div>
                           </div>
                           <div class="form-group row">
                               <div class="col-md-4 text-md-right col-form-label">
                                   <label for="email">Email address:</label>
                               </div>
                               <div class="col-md-8">
                                   <input type="email" class="form-control" id="email"  placeholder="Enter Your Email Address ...">
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
    import Component from 'vue-class-component';
    import SettingSidebar from './setting-sidebar.vue';

    @Component({
        components: {
            SettingSidebar
        }
    })
    export default class ProfileSettings {
        created() {
            console.info('profile.vue Been Created')
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>
