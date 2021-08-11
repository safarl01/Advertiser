'use strict';
import 'bootstrap/dist/js/bootstrap';
import 'owl.carousel2/dist/owl.carousel';

// $(function () {

$(document).ready(function () {

    // Category List
    $(".category-link-right").click(function(){

        $(this).parent().siblings().find(".sub-menu").slideUp()
        $(this).next().slideToggle();

    });

    // Mobile Toggle Menu
    $(".menu-toggler").click(function() {

        $(".menu-block").toggleClass("toggle-menu-block");

    });

});


// });