import "@laylazi/bootstrap-rtl-scss/scss/bootstrap-rtl.scss";
import "./sass/style.scss";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js";
import 'jquery/dist/jquery.min';
import "popper.js/dist/popper.min.js";


$(function(){
    var date = new Date();
    
    $("#save").text(date.getFullYear());
})