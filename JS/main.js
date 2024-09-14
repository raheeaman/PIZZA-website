
  // window.addEventListener("scroll", function() {
  //   var navbar = document.querySelector(".navigation-wrap");
  //   navbar.classList.toggle("scroll-on", window.scrollY > 0);
  // });

  window.onscroll = function () {
    var nav = document.querySelector('.navigation-wrap');
    if (window.scrollY > 50) {
      nav.classList.add('scroll-on');
    } else {
      nav.classList.remove('scroll-on');
    }
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    var navbarCollapse = document.querySelector(".navbar-collapse");
    var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(function(link) {
      link.addEventListener("click", function() {
        if (window.innerWidth < 992) { // 992px is Bootstrap's lg breakpoint
          var bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      });
    });
  });


