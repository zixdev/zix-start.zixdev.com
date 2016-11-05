import Vue from 'vue';
import Component from "vue-class-component";
@Component({
    template: `
        <header>
        
            <!--Navbar-->
            <nav class="navbar navbar-fixed-top scrolling-navbar navbar-dark default-color">
        
                <!-- Collapse button-->
                <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapseEx">
                    <i class="fa fa-bars"></i>
                </button>
        
                <div class="container">
        
                    <!--Collapse content-->
                    <div class="collapse navbar-toggleable-xs" id="collapseEx">
                        <!--Navbar Brand-->
                        <a class="navbar-brand" href="/">
                            <b>Zix</b> Development
                        </a>
                        <!--Links-->
                        <ul class="nav navbar-nav pull-right">
                            <li class="nav-item">
                                <a class="nav-link" >Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about-us">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#our-blog">Our Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <!--/.Collapse content-->
        
                </div>
        
            </nav>
            <!--/.Navbar-->
        
        </header>
    `
})
export default class AppHeader {
    changeLang(lang) {
        $('#wrapper').fadeOut();
        setTimeout(() => {
            Vue.config.lang = lang;
            $('#wrapper').fadeIn();
        }, 500);
    }
}

