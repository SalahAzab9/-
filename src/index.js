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

(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();