//轮播图的设置
$(function(){


  $('.carousel').carousel({
     interval: 0
    })

  function resize(){

  var windowWidth=$(window).width();
  var isSmallScreen=windowWidth<768;
  $('#lunbo> .carousel-inner > .item').each(function(index, el) {
    var $el=$(el);
    var imgSrc=isSmallScreen ? $el.data('image-xs') : $el.data('image-lg');
    $el.css('backgroundImage','url(" '+ imgSrc +'")');
    if (isSmallScreen) {
      $el.html('<img src="'+imgSrc+'"/>')
    }else {
      $el.empty();
    }
  });

  var $ulWapper=$(".nav-tabs");
  var width=0;
  $ulWapper.children().each(function(index, el) {
    width+=$(el).width();
  });
  if (width>$(window).width()) {
  $ulWapper.css('width',width).parent().css('overflow-x','scroll');
  }else {
    $ulWapper.css('width','100%');
  }
  }
  $(window).on('resize',resize).trigger('resize');

  $('[data-toggle="tooltip"]').tooltip();

  var newsTitle=$(".news-title")
  $("#news .nav-pills a").on('click', function(event) {
    var $this=$(this);
    var title=$this.data('title');
    newsTitle.html(title);
  });



  var $carousel=$(".carousel");
  var startX;
  var endX;

  $carousel.on('touchstart',function(e){
    // console.log(e);
    startX=e.originalEvent.touches[0].clientX;
  });
   $carousel.on('touchmove',function(e){
    // console.log(e);
    endX=e.originalEvent.touches[0].clientX;
    // console.log(endX);
  });
  $carousel.on('touchend',function(e){
     var destense= Math.abs(startX - endX);
    if (destense>30) {
    console.log(destense);
    $(this).carousel(startX>endX ? 'next':'prev')
    };
  });
   


})
