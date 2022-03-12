import "@laylazi/bootstrap-rtl-scss/scss/bootstrap-rtl.scss";
import "./sass/style.scss";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js";
import 'jquery/dist/jquery.min';
import "jquery-validation/dist/jquery.validate.min.js";
import "popper.js/dist/popper.min.js";

function scrolldown() {
  if(document.documentElement.scrollTop > 200){
    $("#navbar-example2").addClass("drop");
  } else {
    $("#navbar-example2").removeClass("drop");
  }
}

window.onscroll = function() {
  scrolldown();
};

$(function(){
    var date = new Date();
    
    $("#save").text(date.getFullYear());

    $("#form").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true
        },
        password2 :{
          required : true
        },
        text: {
          required :true,
        },
        date: {
          required :true,
        },
        checkbox: {
          required :true,
        }
      },
      messages: {
        email:{
          required : "من فضلك ادخل البريد الالكتروني !",
          email: "من فضلك ادخل البريد الالكتروني بشكل صحيح !"
        },
        password : {
          required : "من فضلك ادخل كلمة المرور !"
        },
        password2 :{
          required : "من فضلك اعد ادخال كلمة المرور !"
        },
        text: {
          required :"من فضلك ادخل الاسم !"
        },
        date: {
          required :"من فضلك ادخل تاريخ الميلاد!"
        },
        checkbox: {
          required :"هذا الحقل إلزامي!",
        }
      }
    });
});




