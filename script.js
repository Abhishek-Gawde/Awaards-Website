const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function page3function() {
  var elemC = document.querySelector(".elem-container");
  var fixed = document.querySelector(".fixed-image");

  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });

  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elem1 = document.querySelector("#elem1");

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

function page4function() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,    
  });
}

page3function();
page4function();
