import Component from 'vue-class-component'

@Component({
    template: `
        <footer class="page-footer center-on-small-only default-color">
        
            <!--Footer Links-->
            <div class="container">
                <div class="row">
        
                    <!--First column-->
                    <div class="col-md-5">
                        <h5 class="title">Zix Development LTD</h5>
                        <br>
                        <p>Material Design (codenamed Quantum Paper) is a design language developed by Google. </p>
        
                    </div>
                    <!--/.First column-->
        
                    <hr class="hidden-md-up">
        
                    <!--Second column-->
                    <div class="col-md-3">
                        <h5 class="title">Quick Links</h5>
                        <ul>
                     
                        </ul>
                    </div>
                    <!--/.Second column-->
        
                    <hr class="hidden-md-up">
        
                    <!--Third column-->
                    <div class="col-md-2">
                        <h5 class="title">Legal</h5>
                        <ul>
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>
                    <!--/.Third column-->
        
                    <hr class="hidden-md-up">
        
                    <!--Fourth column-->
                    <div class="col-md-2">
                        <h5 class="title">Other Links</h5>
                        <ul>
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>
                    <!--/.Fourth column-->
        
                </div>
            </div>
            <!--/.Footer Links-->
        
            <hr>
        
            <!--Call to action-->
            <div class="call-to-action">
                <ul>
                    <li>
                        <h5>Follow Us</h5>
                    </li>
                </ul>
            </div>
            <!--/.Call to action-->
        
            <!--Social buttons-->
            <div class="social-section">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank" class="btn-floating btn-small btn-fb">
                            <i class="fa fa-facebook"> </i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_blank" class="btn-floating btn-small btn-tw">
                            <i class="fa fa-twitter"> </i>
                        </a>
                    </li>
                    <li>
                        <a href="https://plus.google.com/u/0/" target="_blank" class="btn-floating btn-small btn-gplus">
                            <i class="fa fa-google-plus"> </i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/" target="_blank" class="btn-floating btn-small btn-li">
                            <i class="fa fa-linkedin"> </i>
                        </a>
                    </li>
                    <li>
                        <a class="btn-floating btn-small btn-git">
                            <i class="fa fa-github"> </i>
                        </a>
                    </li>
                    <li>
                        <a href="https://pl.pinterest.com/" target="_blank" class="btn-floating btn-small btn-pin">
                            <i class="fa fa-pinterest"> </i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank" class="btn-floating btn-small btn-ins">
                            <i class="fa fa-instagram"> </i>
                        </a>
                    </li>
                </ul>
            </div>
            <!--/.Social buttons-->
        
            <!--Copyright-->
            <div class="footer-copyright">
                <div class="container-fluid">
                    © 2016 Copyright: <a href="http://www.zixdev.com"> Zix Development</a>
                </div>
            </div>
            <!--/.Copyright-->
        
        </footer>

  `,
    // style: require('./footer.scss')
})
export default class AppFooter {}
