//animate smooth scroll of view explore

// $('#view-work').on('click',function(){
//     const images = $('#images').position().top;

//     $('html , body').animate({
//         scrollTop : images
//     },500);
// });

// $('.demoSin-btn,.demoSup-btn').on('click',function(){
//     const btn = $('#landing-text-btn').position(top);

//     $('html , body').animate({
//         scrollTop : btn
//     },500);
// });

// animate smooth scroll of login/signup buttons in smaller(<500px)
$('.demoSin-btn,.demoSup-btn').on('click',function(){
    const minw = $('#landing-image').height();
    // alert(minw);
        if (minw < 850) {
        const images = $('#up').position().top;

        $('html , body').animate({
            scrollTop : images
        },500);    
        // $('#landing-image').width(function(n,c){return c+40;})
        } 
        else {
        return 0;
        }
   
});
//login/signin form animate
$(document).ready(function(){
$('#landing-access-login').hide();
$('#landing-access-signup').hide();

$('.demoSin-btn').click(function(){
    $('#landing-access-login').show("slow");
    $('#landing-access-signup').hide("slow");
    $('#login-email, #login-password').val("");
});
$('.demoSup-btn').click(function(){
    $('#landing-access-signup').show("slow");
    $('#landing-access-login').hide("slow");
    $('#new-email, #fullname, #password, #username').val("");
});
$('#already-user a').click(function(){
    $('#landing-access-login').show("slow");
    $('#landing-access-signup').hide("slow");
    $('#login-email, #login-password').val("");
    const minw = $('#landing-image').height();
        if (minw < 850) {
        const images = $('#up').position().top;

        $('html , body').animate({
            scrollTop : images
        },500);    
        } 
        else {
        return 0;
        }
});
$('#new-user a').click(function(){
    $('#landing-access-signup').show("slow");
    $('#landing-access-login').hide("slow");
    $('#new-email, #fullname, #password, #username').val("");
    const minw = $('#landing-image').height();
        if (minw < 850) {
        const images = $('#up').position().top;

        $('html , body').animate({
            scrollTop : images
        },500);    
        } 
        else {
        return 0;
        }
});
});
////////form animation ends/////////////////

///sticky navbar////
// window.onscroll = function() {myFunction()};
// // alert("scrolling");
// var navbar = document.getElementById("header");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }





















// $(document).ready(function(){
//     $("#landing-form-signin").toggle();
//     $().hide();
    
//     });
// "#landing-form-signin".hide();
// $("#signup").click(function(){
//      $("#landing-access-btn").hide();
//      $().hide();
//      $().show();

// });

// $("#signin").on('click',function(){
//     $("#landing-form-signin").show();
//     $("#landing-access-btn").hide();

//     $().hide();
// });

