$(function () {
  $(".hamburger-menu-btn").on("click", function () {
    $(this).toggleClass("active");
    $("nav").toggleClass("active");
  });

  $(".header-nav-list__item a").on("click", function () {
    if ($("nav").hasClass("active")) {
      $("nav").removeClass("active");
      $(".hamburger-menu-btn").removeClass("active");
    }
  });

  //pickup
  $(".variable-width").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });

  /*
  $('.slick-area').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });
 */

  //featureimage fadein
  const featureimage = document.querySelectorAll(".feature-list-item");

  if (featureimage.length && window.IntersectionObserver) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    featureimage.forEach((image) => {
      observer.observe(image);
    });
  }
});
