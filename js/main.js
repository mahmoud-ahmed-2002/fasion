let firstName = document.getElementById("FirstName");
let lastName = document.getElementById("LastName");
let Description = document.getElementById("Description");
let commentData = [];

$("#addClick").click(function () {
  let data = {
    firstName: firstName.value,
    lastName: lastName.value,
    description: Description.value,
  };
  commentData.push(data);
  display();
  $("#addComment").show();
  $("#form-group-comment").slideUp();
});
function display() {
  let temp = "";
  for (let i = 0; i < commentData.length; i++) {
    temp += `<li>
          <div class="comment-user">
              <img src="image/comment-user.jpg" alt="">
          </div>
          <div class="comment-detail">
              <div class="user-name">${commentData[i].firstName} ${commentData[i].lastName}</div>
              <div class="post-info">
                  <ul>
                      <li>july 7, 2022</li>
                      <li><a href="#"><i class=" fa fa-reply"><span class="ps-3">Reply</span></i></a></li>
                  </ul>
                  <p>${commentData[i].description}.</p>
              </div>
          </div>
      </li>`;
  }
  $("#user-comment").html(temp);
}

$("#addComment").click(function () {
  $("#addComment").hide();
  $("#form-group-comment").slideDown();
});

$(window).scroll(function () {
  let topScroll = $(window).scrollTop();
  if (topScroll > 100) {
    $(".header-top").addClass("d-none");
    $(".header-bottom").addClass("fixed-top");
  } else {
    $(".header-top").removeClass("d-none");
    $(".header-bottom").removeClass("fixed-top");
  }
});

function owlCarousel_slider() {
  //  carousal of the start
  $(".owl-theme").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    animateOut: "fadeOut",
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  //  carousal of new
  $(".pro-cat-slider").owlCarousel({
    items: 6,
    margin: 10,
    nav: true,
    dots: false,
    loop: true,
    // autoplay:true,
    // autoplayTimeout:5000,
    // autoplayHoverPause:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1770: {
        items: 6,
      },
    },
  });

  $("#top-cat-pro").owlCarousel({
    items: 5,
    nav: true,
    dots: false,
    margin: 40,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      460: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1770: {
        items: 5,
      },
    },
  });

  $("#blog").owlCarousel({
    items: 4,
    nav: true,
    dots: false,
    margin: 20,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1770: {
        items: 4,
      },
    },
  });
  /* ---- Testimonial Start ---- */
  $("#client").owlCarousel({
    //navigation : true,  Show next and prev buttons
    items: 1,
    nav: true,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
  });
  /* ----- Testimonial End  ------ */
  /* -----  our-team slider Start  ------ */
  $(".our-team").owlCarousel({
    items: 6,
    nav: true,
    dots: false,
    margin: 10,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1770: {
        items: 6,
      },
    },
  });
  /* ----- our-team slider End  ------ */
}

function swiper() {
  //  slider image of product-blog
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    centeredSlides: false,
    mousewheel: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
}

function responsive_dropdown() {
  /* ---- For Footer JS Start ---- */
  $(".icon-click i").on("click", function () {
    if ($(this).hasClass("fa-plus")) {
      $(this).removeClass("fa-plus");
      $(this).addClass("fa-minus");
      $(this).parent().parent().find(".footer-block-contant").slideDown();
      // console.log("yes");
    } else {
      $(this).addClass("fa-plus");
      $(this).removeClass("fa-minus");
      $(this).parent().parent().find(".footer-block-contant").slideUp();
      // console.log("no");
    }
  });
  /* ---- For Footer JS End ---- */
  /*  ------ for CATEQORIES dropdown*/
  $(".sidebar-menu-dropdown").click(function () {
    $(this).parent().find("#cat").slideToggle("slow");
  });
  /*  ------ for CATEQORIES dropdown end */
  // -------------- for contain js
  $(".shop-icon-click i").click(function () {
    if ($(this).hasClass("fa-plus")) {
      $(this).removeClass("fa-plus");
      $(this).addClass("fa-minus");
      $(this).parent().parent().find(".sidebar-contant").slideDown();
      // console.log("yes");
    } else {
      $(this).addClass("fa-plus");
      $(this).removeClass("fa-minus");
      $(this).parent().parent().find(".sidebar-contant").slideUp();
      // console.log("no");
    }
  });
}

$(document).ready(function () {
  $(".spinner").fadeOut(2000);
  $(".mahmoud").niceSelect();
  owlCarousel_slider();
  responsive_dropdown();
  swiper();
  paginationItem();
});

$(".nav-link").click(function () {
  $(this).addClass("active");
  $(this).parent().siblings().find(".nav-link").removeClass("active");
});

$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 800,
    values: [75, 500],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      let min = Math.floor(ui.values[0]);
      let max = Math.floor(ui.values[1]);
      $(".product-listing .my-product-item").each(function () {
        let startTime = min;
        let endTime = max;
        let value = $(this).data("value");
        if (
          parseInt(endTime) >= parseInt(value) &&
          parseInt(startTime) <= parseInt(value)
        ) {
          $(this).show();
        } else {
          $(this).hide();
        }
        //
      });
    },
  });
  // -------------------+
  $("#amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
  );
});

// ------------------ view product item
$(".view .list-types i").click(function () {
  $(this).addClass("active");
  $(this).parent().siblings().children().removeClass("active");
  let aList = $(this).parent().attr("class");
  if ($(this).parent().attr("class") == "list-types list") {
    $(".my-product-item").parent().addClass("list");
    $(".my-product-item")
      .siblings()
      .removeClass("col-xl-3 col-md-4 col-6")
      .addClass("col-12");
    // paginationList(aList)
  } else {
    $(".my-product-item").parent().removeClass("list");
    $(".my-product-item")
      .siblings()
      .addClass("col-xl-3 col-md-4 col-6")
      .removeClass("col-12");
    // paginationList(aList)
  }
});
// -------------  end view item

// ------------- start pagination
let items = $(".my-product-item");
let numItems = items.length;
let perPage = 12;
items.slice(perPage).hide();
$("#pagination-container").pagination({
  items: numItems,
  itemsOnPage: perPage,
  prevText: "&laquo;",
  nextText: "&raquo;",
  onPageClick: function (pageNumber) {
    let showFrom = perPage * (pageNumber - 1);
    let showTo = showFrom + perPage;
    items.hide().slice(showFrom, showTo).show();
  },
});
$(".simple-pagination ul li .page-link").click(function () {
  let sc = $(".product-listing").offset().top - 200;
  $(window).scrollTop(sc);
  console.log("tmamam");
});
// ------------ end pagination
function paginationItem() {}

//   ---------------- the code of responcev
// breakpoints(1200, function(oldPoint, newPoint) {
//   alert('The screen width just changed');
// });
$(window).resize(function () {
  let width = $(window).width();
  if (width < 991) {
  }
});

//   count click

function clickPlus() {
  let valueCount = document.getElementById("qty");
  valueCount.value = Number(valueCount.value) + 1;
  document.getElementById("count-mins").disabled = false;
  if (valueCount.value >= 8) {
    document.getElementById("count-plus").disabled = true;
  } else {
    document.getElementById("count-plus").disabled = false;
  }
}

function clickMins() {
  let valueCount = document.getElementById("qty");
  valueCount.value = Number(valueCount.value) - 1;
  document.getElementById("count-plus").disabled = false;
  if (valueCount.value <= 0) {
    document.getElementById("count-mins").disabled = true;
  } else {
    document.getElementById("count-mins").disabled = false;
  }
}

function niceDropdown() {
  $(".mahmoud").niceSelect();
}
