$(function(){
  $(window).resize(function(){location.reload();});
  $("#button").on('click',function(event){
  if(!$("#kep").val()) {
     $("#kep").addClass('error');
      event.preventDefault();
   } else if (!$("#selection").val()) {
   $("#selection").addClass('error');
      event.preventDefault();
}
  });
 
  
     test("#selection");
     test("#kep");


  $(function(){
     $("#login").on('click',function(event){
  if(!$("#username").val()) {
     $("#username").addClass('error');
     $("#username").removeClass('default');
      event.preventDefault();
   } else if (!$("#password").val()) {
    $("#password").addClass('error');
    $("#password").removeClass('default');
      event.preventDefault();
} 
  });
 });


     test("#password");
     test("#username");

 function test(level) {
$(level).change(function(e){
     $(this).removeClass('default');
     $(this).removeClass('error');
     $(this).addClass('ok');
     });
 }
 $("#kep").change(function(){
    if(this.files.length>10) {
        $("#id_errors").text("Max 10 files");
        $("#kep").addClass('error');
       }else {
        $(".mass").text("");
       }
});
 


$(function(){
  $("#delete").on('click',function(event){
  if($('.require-one:checked').length > 0){
} else {
 event.preventDefault();
  $(".mass").text("Please select image.");
}
  });
 });

 (function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1200)
            .delay(4000)
            .fadeOut(1200, showNextQuote);
    }
    
    showNextQuote();
    
})();
    
    $(".felso").wrap('<div class="felso-wrap"></div>');
    $(".felso-wrap").height($(".felso").outerHeight);
    $(".bal").wrap('<div class="bal-wrap"></div>');
    $(".bal-wrap").height($(".bal").outerHeight);
    $(".kozep").wrap('<div class="kozep-wrap"></div>');
    $(".kozep-wrap").height($(".kozep").outerHeight);
    $(".jobb").wrap('<div class="jobb-wrap"></div>');
    $(".jobb-wrap").height($(".jobb").outerHeight);
    $(".back").wrap('<div class="back-wrap"></div>');
    $(".back-wrap").height($(".back").outerHeight);
    var objeoffsetb = $(".bal").offset().top;
    var objeoffsetk = $(".kozep").offset().top;
    var objeoffsetj = $(".jobb").offset().top;
    var objeoffsetf = $(".felso").offset().top;
    var objeoffseta = $(".back").offset().top;
    var objeoffsetinfo = $(".info").offset().top;
    var objeoffsetmargin = $(".margin").offset().top;
    var objeoffsetatext = $(".text-two").offset().top;
    var objeoffsettfree = $("#section-three").offset().top;
     $(".back").css("opacity",0);
     $(".text-two").css("opacity",0);
    $(window).scroll(function(){
     var windowHeight = $(window).height();
     var scrolltoppo = $(window).scrollTop();
     var windowScrollPo = windowHeight +scrolltoppo;
    if (!$(".back").hasClass('done')) {
      if (windowScrollPo > objeoffseta + 100) {
          $(".back").animate({"opacity": 0.8}, 2000).addClass('done');
      }
}
    if (!$(".text-two").hasClass('done')) {
      if (windowScrollPo > objeoffsetatext + 100) {
          $(".text-two").animate({"opacity": 1}, 2000).addClass('done');
      }
}
     if (scrolltoppo >= objeoffseta -40) {
       $(".back").addClass('fixed-top');    
     }else {
         $(".back").removeClass('fixed-top'); 
     }
     if (scrolltoppo >= objeoffsetb - 40) {
       $(".bal").addClass('fixed');    
     }else {
         $(".bal").removeClass('fixed'); 
     }
     if (scrolltoppo >= objeoffsetk - 40) {
       $(".kozep").addClass('fixed');    
     }else {
         $(".kozep").removeClass('fixed'); 
     }
     if (scrolltoppo >= objeoffsetj - 40) {
       $(".jobb").addClass('fixed');    
     }else {
         $(".jobb").removeClass('fixed'); 
     }
     if (scrolltoppo >= objeoffsetf - 40) {
       $(".felso").addClass('fixed');    
     }else {
         $(".felso").removeClass('fixed'); 
     }
      if (scrolltoppo >= objeoffsettfree - 40) {
            $(".wrap-kep").addClass('hide');  
      }else{
            $(".wrap-kep").removeClass('hide'); 
      }
    });
   
$(document).on('ready', function() {  
  var winHeight = $(window).height(), 
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

  /* Set the max scrollable area */
  max = docHeight - winHeight;
  progressBar.attr('max', max);

  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
  });
});
 
$(window).on('resize', function() {
  winHeight = $(window).height(),
  docHeight = $(document).height();

  max = docHeight - winHeight;
  progressBar.attr('max', max);

  value =  $(window).scrollTop();
  progressBar.attr('value', value);
});
   
});
var full=false;
var clicked= false;
$('.click').click(function(){
  clicked = true;
});

$('.imgWrap').hover(function () {
 // $(this).css('width', '36%');
   $(this).addClass('current');
  //$(this).siblings().css('width', '16%');  
   $(this).siblings().addClass('notCurrent');
}, function () {
  //$('.imgWrap').css('width', '20%');  
  $('.imgWrap').siblings().removeClass('notCurrent');
  $('.imgWrap').removeClass('current');
 });

$('.imgWrap').click(function () {  
  
  if(!full){
    full = true;
    // $(this).css('width', '100%');
    $(this).addClass('current-full');
  //$(this).siblings().css('width', '0%');  
   $(this).siblings().addClass('notCurrent-full');
  } else {
    if (clicked ==true) {
   clicked= false;
   } else {
 full = false;
  $('.imgWrap').siblings().removeClass('notCurrent-full');
  $('.imgWrap').removeClass('current-full');
   }
  }
});

var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

// execute above function
initPhotoSwipeFromDOM('.my-gallery');

function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          scrollwheel: false,
          zoom: 16,
          center: {lat: 46.575237, lng: 24.601567}
        });

       var marker = new google.maps.Marker({
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: {lat: 46.575237, lng: 24.601567},
          icon: 'http://uniqsource.com/wp-content/uploads/2014/07/small-black-down-arrow.png',

        });
        marker.addListener('click', toggleBounce);
      }

      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }




$(".gradiant_two").bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
       
    }
    else {
          $('html, body').animate({
                    scrollTop: $("#section-six").offset().top
                }, 400);
    }
});




