$(window).scroll(function () {
  let wScroll = $(this).scrollTop();
  // Navbar
  if (wScroll > $('.about').offset().top -550) {
    $('nav').css({
      backgroundColor: 'white',
      boxShadow: '0px 1px 15px rgba(1,1,1,.5)',
    });
    $('nav a').css('color', 'black');
  } else {
    $('nav').css({
      backgroundColor: 'transparent',
      boxShadow: 'none',
    });
    $('nav a').css('color', 'white');
    $('nav a:hover').css('color', '#454D7A');
  }
});

$('.page-scroll').click(function (e) {
  let tujuan = $(this).attr('href');
  let elemenWgWg = $(tujuan).offset().top;

  $('body, html').animate(
    {
      scrollTop: elemenWgWg,
    },
    1250,
    'swing'
  );

  e.preventDefault();
});
