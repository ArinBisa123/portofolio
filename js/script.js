// event pada link
$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var tujuan = $(this).attr("href");
  // tangkap elemen bersangkutan
  var elementTujuan = $(tujuan);
  // pindahkan scroll
  $("html,body").animate(
    {
      scrollTop: elementTujuan.offset().top - 50,
    },
    1250,
    "easeInBack"
  );
  e.preventDefault();
});

// parallax

// about
$(window).on("load", function () {
  $(".pKiri").addClass("muncul");
  $(".pKanan").addClass("muncul");
});
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  //   // jumbotron
  //   $(".jumbotron img").css({
  //     transform: "translate(0px," + wScroll / 4 + "%)",
  //   });
  //   $(".jumbotron h1").css({
  //     transform: "translate(0px," + wScroll / 2 + "%)",
  //   });
  //   $(".jumbotron p").css({
  //     transform: "translate(0px," + wScroll / 1.2 + "%)",
  //   });
  //portofolio
  if (wScroll > $(".card").offset().top - 380) {
    $("card").each(function (i) {
      setTimeout(function () {
        $(".card").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });
  }
});
