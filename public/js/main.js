$('#carouselIndicators').on('slide.bs.carousel', function (elem) {
  var slid = elem.to;
  if (elem.to == 0){
    $('#ht-carousel-second, #ht-carousel-third, #ht-carousel-four, #ht-carousel-five').hide();
    $('#ht-carousel-first').show();
    }else if (elem.to == 1){
      $('#ht-carousel-first, #ht-carousel-third, #ht-carousel-four, #ht-carousel-five').hide();
      $('#ht-carousel-second').show();
    }else if (elem.to == 2){
      $('#ht-carousel-first, #ht-carousel-second, #ht-carousel-four, #ht-carousel-five').hide();
      $('#ht-carousel-third').show();
    }else if (elem.to == 3){
      $('#ht-carousel-first, #ht-carousel-second, #ht-carousel-third, #ht-carousel-five').hide();
      $('#ht-carousel-four').show();
    }else if (elem.to == 4){
      $('#ht-carousel-first, #ht-carousel-second, #ht-carousel-third, #ht-carousel-four').hide();
      $('#ht-carousel-five').show();
    }
});

$('#carouselLG').on('slide.bs.carousel', function (elem) {
  var slidlg = elem.to;
  if (slidlg == 0){
    $('#hd-carousel-text-second, #hd-carousel-text-third, #hd-carousel-text-four, #hd-carousel-text-five').hide();
    $('#hd-carousel-text-first').show();
    }else if (slidlg == 1){
      $('#hd-carousel-text-first, #hd-carousel-text-third, #hd-carousel-text-four, #hd-carousel-text-five').hide();
      $('#hd-carousel-text-second').show();
    }else if (slidlg == 2){
      $('#hd-carousel-text-first, #hd-carousel-text-second, #hd-carousel-text-four, #hd-carousel-text-five').hide();
      $('#hd-carousel-text-third').show();
    }else if (slidlg == 3){
      $('#hd-carousel-text-first, #hd-carousel-text-second, #hd-carousel-text-third, #hd-carousel-text-five').hide();
      $('#hd-carousel-text-four').show();
    }else if (slidlg == 4){
      $('#hd-carousel-text-first, #hd-carousel-text-second, #hd-carousel-text-third, #hd-carousel-text-four').hide();
      $('#hd-carousel-text-five').show();
    }
});

$('#carouselMobile').on('slide.bs.carousel', function (elem) {
  var slidMobile = elem.to;
  if (slidMobile == 0){
    $('#hm-carousel-text-second, #hm-carousel-text-third, #hm-carousel-text-four, #hm-carousel-text-five').hide();
    $('#hm-carousel-text-first').show();
    }else if (slidMobile == 1){
      $('#hm-carousel-text-first, #hm-carousel-text-third, #hm-carousel-text-four, #hm-carousel-text-five').hide();
      $('#hm-carousel-text-second').show();
    }else if (slidMobile == 2){
      $('#hm-carousel-text-first, #hm-carousel-text-second, #hm-carousel-text-four, #hm-carousel-text-five').hide();
      $('#hm-carousel-text-third').show();
    }else if (slidMobile == 3){
      $('#hm-carousel-text-first, #hm-carousel-text-second, #hm-carousel-text-third, #hm-carousel-text-five').hide();
      $('#hm-carousel-text-four').show();
    }else if (slidMobile == 4){
      $('#hm-carousel-text-first, #hm-carousel-text-second, #hm-carousel-text-third, #hm-carousel-text-four').hide();
      $('#hm-carousel-text-five').show();
    }
});






// function on(str, fn) {
//   var elem = document.getElementById('carouselIndicators');
//   if ('slide.bs.carousel') return fn(elem);
// }
