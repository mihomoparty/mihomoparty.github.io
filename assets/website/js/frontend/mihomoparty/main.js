/* <![CDATA[ */
 jQuery(document).ready(function($) {
 'use strict';
	

	//-------------------- Header Secrch  --------------------//
	jQuery(".header-search-a").on('click',(function (){
		var header_search = jQuery(this);
		if (header_search.parent().hasClass("header-search-active")) {
			header_search.parent().removeClass("header-search-active");
			header_search.parent().find(".header-search-form").slideUp(300);
		}else {
			header_search.parent().addClass("header-search-active");
			header_search.parent().find(".header-search-form").slideDown(300);
		}
	}));
	 //-- Making the header fixed --
	var jQueryheader = jQuery('header#header');
	var jQueryheaderTop = jQueryheader.offset().top;

	jQuery('.offset').height( jQueryheader.outerHeight() )
  
	//-- Window Scroll Functions --
   
	jQuery(window).scroll(function(){
		(jQuery(window).scrollTop() > jQueryheaderTop) ? jQuery('.header').addClass('fixedHeader') : jQuery('.header').removeClass('fixedHeader');
	});
	//--------------------------------------------------------------------------------------------

	/* ◄------ Accordion & Toggle -------------------------------► */

		jQuery("#accordianShortCode .accordionRow > a").on("click", function(e){
		  if(jQuery(this).parent().has("div")) {
			e.preventDefault();
		  }
		  
		  if(!jQuery(this).hasClass("activeLine")) {
			// hide any open menus and remove all other classes
			jQuery("#accordianShortCode .accordionRow > a").removeClass("activeLine");
			jQuery("#accordianShortCode .accordionRow > .accordion-content").removeClass("opened");
			jQuery("#accordianShortCode .accordionRow > .accordion-content").slideUp(500);
			
			// open our new menu and add the activeLine class
			jQuery(this).addClass("activeLine");
			jQuery("#accordianShortCode .accordionRow > .accordion-content").addClass("opened");
			jQuery(this).next(".accordion-content").slideDown(500);
		  }
		  
		  else if(jQuery(this).hasClass("activeLine")) {
			jQuery(this).removeClass("activeLine");
			jQuery("#accordianShortCode .accordionRow > .accordion-content").removeClass("opened");
			jQuery(this).next(".accordion-content").slideUp(500);
		  }
		});
	
	//--------------------------------------------------------------------------------------------

	//-- Accordion 2 --
	
		jQuery("#accordianShortCode2 .accordionRow > a").on("click", function(e){
			if(jQuery(this).parent().has("div")) {
			e.preventDefault();
		  }
		  
		  if(!jQuery(this).hasClass("activeLine")) {
			// hide any open menus and remove all other classes
			jQuery("#accordianShortCode2 .accordionRow > a").removeClass("activeLine");
			jQuery("#accordianShortCode2 .accordionRow > .accordion-content").removeClass("opened");
			jQuery("#accordianShortCode2 .accordionRow > .accordion-content").slideUp(500);
			
			// open our new menu and add the activeLine class
			jQuery(this).addClass("activeLine");
			jQuery("#accordianShortCode2 .accordionRow > .accordion-content").addClass("opened");
			jQuery(this).next(".accordion-content").slideDown(500);
		  }
		  
		  else if(jQuery(this).hasClass("activeLine")) {
			jQuery(this).removeClass("activeLine");
			jQuery("#accordianShortCode2 .accordionRow > .accordion-content").removeClass("opened");
			jQuery(this).next(".accordion-content").slideUp(500);
		  }
		});

	//--------------------------------------------------------------------------------------------

	//-- tabs --

	
		jQuery('.tabsContainer').easytabs();

  //--------------------------------------------------------------------------------------------
  
	//-- Progressbar --

		jQuery('.progress-bar').on('each',(function(){
		var imagePos = jQuery(this).offset().top;

		var topOfWindow = jQuery(document).scrollTop();
		  if (imagePos < topOfWindow+jQuery(window).height() * 0.8) {
			jQuery(this).addClass("animated slideRightSlow");
		  }
		}));
	 


	/* ◄------ Nice Scroll -------------------------------► */

	  //-- The whole page --
	  jQuery("html").niceScroll({
		cursorborder: 0,
		cursorcolor: '#171717',
		autohidemode: true,
		zindex: 9999999,
		scrollspeed: 60,
		mousescrollstep: 36,
		cursorwidth: 6,
		horizrailenabled: false,
		cursorborderradius: 3
	  });
  //--------------------------------------------------------------------------------------------
 
	

		//-- Including the main nav contents in responsive main nav DIV --
		jQuery('.mainNav .navTabs').clone().appendTo('.responsiveMainNav');

		//-- Show and Hide responsive nav --
		jQuery('#responsiveMainNavToggler').on('click',(function(event){
		  event.preventDefault();
		  jQuery('#responsiveMainNavToggler').toggleClass('opened');
		  jQuery('.responsiveMainNav').slideToggle(1000);
		  jQuery('.responsiveMainNav').addClass('nav-active');


		  if ( jQuery('#responsiveMainNavToggler i').hasClass('fa-bars') )
		  {   
			  jQuery('#responsiveMainNavToggler i').removeClass('fa-bars');
			  jQuery('#responsiveMainNavToggler i').addClass('fa-close');
		  }else
		  {  
			  jQuery('#responsiveMainNavToggler i').removeClass('fa-close');
			  jQuery('#responsiveMainNavToggler i').addClass('fa-bars');
		  }
		}));
		// dropdown level 1
		if(jQuery(".responsiveMainNav .navTabs > li > a").parent().has("ul")) {
		  jQuery(".responsiveMainNav .navTabs > li > a:first-child").addClass("toggleResponsive");
		  jQuery(".responsiveMainNav .navTabs > li > a:last-child").removeClass("toggleResponsive");
		}

		jQuery(".responsiveMainNav .navTabs > li > .toggleResponsive").on("click", function(e){
		  if(jQuery(this).parent().has("ul")) {
			e.preventDefault();
		  }
		  
		  if(!jQuery(this).hasClass("activeLine")) {
			// hide any open menus and remove all other classes
			jQuery(".responsiveMainNav .navTabs > li > .toggleResponsive").removeClass("activeLine");
			jQuery(".responsiveMainNav .navTabs > li > .dropDown").slideUp(500);
			
			// open our new menu and add the activeLine class
			jQuery(this).addClass("activeLine");
			jQuery(this).next(".responsiveMainNav .navTabs > li > .dropDown").slideDown(500);
		  }
		  
		  else if(jQuery(this).hasClass("activeLine")) {
			jQuery(this).removeClass("activeLine");
			jQuery(this).next(".responsiveMainNav .navTabs > li > .dropDown").slideUp(500);
		  }
		});


		// dropdown level 2
		if(jQuery(".responsiveMainNav .navTabs > li > .dropDown > li > a").parent().has("ul")) {
		  jQuery(".responsiveMainNav .navTabs > li > .dropDown > li > a:first-child").addClass("toggleResponsive");
		  jQuery(".responsiveMainNav .navTabs > li > .dropDown > li > a:last-child").removeClass("toggleResponsive");
		}


		jQuery(".responsiveMainNav .navTabs > li > .dropDown > li > .toggleResponsive").on("click", function(e){
		  if(jQuery(this).parent().has("ul")) {
			e.preventDefault();
		  }

		  if(!jQuery(this).hasClass("activeLine")) {
			// hide any open menus and remove all other classes
			jQuery(".responsiveMainNav .navTabs > li > .dropDown > li > .toggleResponsive").removeClass("activeLine");
			jQuery(".responsiveMainNav .navTabs > li > .dropDown li .dropDown").slideUp(500);
			
			// open our new menu and add the activeLine class
			jQuery(this).addClass("activeLine");
			jQuery(this).next(".responsiveMainNav .navTabs > li > .dropDown li .dropDown").slideDown(500);
		  }
		  
		  else if(jQuery(this).hasClass("activeLine")) {
			jQuery(this).removeClass("activeLine");
			jQuery(this).next(".responsiveMainNav .navTabs > li > .dropDown li .dropDown").slideUp(500);
		  }
		});

	
	//-------------------- Owlslider Testimonials1 --------------------//
	$("#owl-testimonials").owlCarousel({
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  autoPlay: 3000,
		  singleItem:true,
		  //Pagination
		  pagination :false
	  });

	//-------------------- Owlslider Testimonials2 --------------------//
	$("#owl-testimonials2").owlCarousel({
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  autoPlay: 3000,
		  singleItem:true,
		  navigation : true,
		  //Pagination
		  pagination :false
	  });

	//-------------------- Owlslider Testimonials3 --------------------//
	$("#owl-testimonials3").owlCarousel({
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  autoPlay: 3000,
		  singleItem:true,
		  navigation : true,
		  //Pagination
		  pagination :false,
		   navigationText:[
			"<i class='fa fa-angle-left fa-2x'></i>",
			"<i class='fa fa-angle-right fa-2x'></i>"
			]
	  });

	//-------------------- Owlslider OurClient --------------------//
	$("#owl-OurClient").owlCarousel({
	
	  autoPlay: 3000, //Set AutoPlay to 3 seconds
      itemsCustom : [
				[0, 1],
				[450, 1],
				[600, 2],
				[700, 3],
				[1000, 5],
				[1200, 5],
				[1400, 5],
				[1600, 5]
				],
		//Pagination
	  pagination :false
  });
  //--------------------  Owlslider Blog Section --------------------//
  
	$("#owl-latest-post").owlCarousel({
      navigation : true,
	  slideSpeed : 300,
	  paginationSpeed : 400,
	   itemsCustom : [
				[0, 1],
				[450, 1],
				[600, 1],
				[700, 2],
				[1000, 4],
				[1200, 4],
				[1400, 4],
				[1600, 4]
				], //10 items above 1000px browser width

	  //Pagination
	  pagination :false,
	   navigationText:[
        "<i class='fa fa-angle-left fa-2x'></i>",
        "<i class='fa fa-angle-right fa-2x'></i>"
		]
	});

	//--------------------  Owlslider LatestPost Home3 Section --------------------//

	$("#owl-latest-post-home3").owlCarousel({
      navigation : true,
	  slideSpeed : 300,
	  paginationSpeed : 400,
	   itemsCustom : [
				[0, 1],
				[450, 1],
				[600, 1],
				[700, 1],
				[1000, 2],
				[1200, 3],
				[1400, 3],
				[1600, 3]
				], //10 items above 1000px browser width

	  //Pagination
	  pagination :false
	});
	//--------------------  Owlslider RecentWork Home3 Section --------------------//

	$("#owl-ndab-recentwork").owlCarousel({
      navigation : true,
	  slideSpeed : 300,
	  paginationSpeed : 400,
	   itemsCustom : [
				[0,1],
				[450, 1],
				[600, 1],
				[700, 2],
				[1000, 4],
				[1200, 4],
				[1400, 4],
				[1600, 4]
				], //10 items above 1000px browser width

		  //Pagination
		  pagination :false,
		   navigationText:[
			"<i class='fa fa-angle-left fa-2x' style='color:#a4a4a4;'></i>",
			"<i class='fa fa-angle-right fa-2x' style='color:#a4a4a4;'></i>"
			]
	});
	//--------------------  Owlslider RecentWork Home3 Section --------------------//

	$("#owl-ndrecentworks3").owlCarousel({
      navigation : true,
	  slideSpeed : 300,
	  paginationSpeed : 400,
	   itemsCustom : [
				[0,1],
				[450, 1],
				[600, 1],
				[700, 1],
				[1000, 3],
				[1200, 3],
				[1400, 3],
				[1600, 3]
				], //10 items above 1000px browser width

	  //Pagination
	  pagination :false
	});
	
	//--------------------  Owlslider Blog page --------------------//

	$("#owl-blogpage-postslide").owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 400,
		autoPlay: 3000,
		singleItem:true,
		navigation : true,
	  //Pagination
	  pagination :true,
	   navigationText:[
        "<i class='arrow_carrot-left' style='color:#7e8082;font-size: 2em;margin: 0px -5px;'></i>",
        "<i class='arrow_carrot-right' style='color:#7e8082;font-size: 2em;margin: 0px -5px;'></i>"
		]
	});
	
	//--------------------  Owlslider Portfolio Page --------------------//
	$("#owl-porsingle-postslide").owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 400,
		autoPlay: 3000,
		singleItem:true,
		navigation : true,

	  //Pagination
	  pagination :true,
	   navigationText:[
        "<i class='arrow_carrot-left' style='color:#7e8082;font-size: 2em;margin: 0px -5px;'></i>",
        "<i class='arrow_carrot-right' style='color:#7e8082;font-size: 2em;margin: 0px -5px;'></i>"
		]
	});
	
	//-------------------- for portfoli filter jquary --------------------//

		var $container = $('.portfolioContainer');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
	 
		$('.portfolioFilter a').on('click',(function(){
			$('.portfolioFilter .current').removeClass('current');
			$(this).addClass('current');
	 
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			 });
			 return false;
		})); 
		//-------------------- for portfoli lightbox jquary --------------------//
		
		jQuery(function() {
			var $chosenSheet,
			$stylesheets = $( "a[id^=theme-]" );
			
			// run rlightbox
			$( ".lb" ).rlightbox();
			$( ".lb_title-overwritten" ).rlightbox({overwriteTitle: true});
		});

	
    if(is_touch_device()){
        $(".portfolio-image").on('click', function(e){					
            $(this).find('.portfolio-hover').show();
        });
    }
    
    function is_touch_device() {
        return 'ontouchstart' in window // works on most browsers 
        || 'onmsgesturechange' in window; // works on ie10
    }
	

    (function() {
        //ISOTOPE
        // cache container
        var $portfolioContainer = $('.portfolioContainer');
        // initialize isotope
        $portfolioContainer.isotope({
            filter: '*',
            masonry: {
                columnWidth: 1,
                isResizable: true
            }
        });

        
    })();
	//-------------------- End PORTFOLIO ISOTOPE FILTER --------------------//
	
	//-------------------- Animation elements with CSS3 --------------------//
	
	var topOffset = $(window).scrollTop() + ($(window).height()*0.8);
		
	$('.animation, .animation-visible').on('each',(function() {
		var imagePos = $(this).offset().top;
		if (imagePos < topOffset) { $(this).addClass('animated ' + $(this).attr('data-animation')); }
	}));
	
	$(window).scroll(function() {
		var topOffset = $(window).scrollTop() + ($(window).height()*0.8);
		
		$('.animation, .animation-visible').on('each',(function() {
			var imagePos = $(this).offset().top;
			if (imagePos < topOffset) { $(this).addClass('animated ' + $(this).attr('data-animation')); }
		}));
	});
	
	$(window).resize(function() {
		$(window).scroll(function() {
			var topOffset = $(window).scrollTop() + ($(window).height()*0.8);
			
			$('.animation, .animation-visible').on('each',(function() {
				var imagePos = $(this).offset().top;
				if (imagePos < topOffset) { $(this).addClass('animated ' + $(this).attr('data-animation')); }
			}));
		});
	});
	
	//-------------------- End animation elements with CSS3 --------------------//

	//-------------------- Twitter integration with jQuery --------------------//
	
	$.getJSON('includes/get-tweets.php',
        function(feeds) {
            // alert(feeds);
			var displaylimit		= 2;
			var showdirecttweets	= false;
			var showretweets		= true;
            var feedHTML			= '';
            var displayCounter		= 1;
			var $tweets				= $('.nd_tweets_widget');
			
			if(feeds !== null) {
				for (var i=0; i<feeds.length; i++) {
					var tweetscreenname	= feeds[i].user.name;
					var tweetusername	= feeds[i].user.screen_name;
					var profileimage	= feeds[i].user.profile_image_url_https;
					var status			= feeds[i].text;
					var isaretweet		= false;
					var isdirect		= false;
					var tweetid			= feeds[i].id_str;
	 
					// If the tweet has been retweeted, get the profile pic of the tweeter
					if (typeof feeds[i].retweeted_status !== 'undefined') {
						profileimage	= feeds[i].retweeted_status.user.profile_image_url_https;
						tweetscreenname	= feeds[i].retweeted_status.user.name;
						tweetusername	= feeds[i].retweeted_status.user.screen_name;
						tweetid			= feeds[i].retweeted_status.id_str;
						isaretweet		= true;
					}
					
					// Check to see if the tweet is a direct message
					if (feeds[i].text.substr(0,1) === '@') {
						isdirect = true;
					}
					
					// console.log(feeds[i]);
					
					if (((showretweets === true) || ((isaretweet === false) && (showretweets === false))) && ((showdirecttweets === true) || ((showdirecttweets === false) && (isdirect === false)))) {
						if ((feeds[i].text.length > 1) && (displayCounter <= displaylimit)) {
	 
							if (displayCounter === 1) {
								feedHTML = '';
							}
							
							feedHTML	+= '<li>';
							feedHTML	+= '<div class="ndtwitter">';
							feedHTML	+= '<a href="http://twitter.com/' + tweetusername + '/status/' + tweetid + '" target="_blank"><i class="social_twitter"></i></a>';
							feedHTML	+= '</div>';
							feedHTML	+= '<p>' + JQTWEET.ify.clean(status) + '</p>';
							if (JQTWEET.timeAgo(feeds[i].created_at) !== '') {
								feedHTML += '<div class="date"><a href="http://twitter.com/' + tweetusername + '/status/' + tweetid + '" target="_blank">' +  JQTWEET.timeAgo(feeds[i].created_at) + '</a></div>';
							}
							feedHTML	+= '</li>';
							
							displayCounter++;
						}
					}
				}
	 
				$tweets.html(feedHTML);
				$tweets.hide().fadeIn(1000);
			}
		}
	);
	// Twitter data format function
	var JQTWEET = {
		timeAgo: function(dateString) { // twitter date string format function
			var rightNow = new Date();
			var then = new Date(dateString);
			
			if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
				jQuery.browser.msie = true;
				jQuery.browser.version = RegExp.$1;
			}
			
			var diff = rightNow - then;
			var second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24;
	 
			if (isNaN(diff) || diff < 0) { return ""; }
			if (diff < second * 2) { return "right now"; }
			if (diff < minute) { return Math.floor(diff / second) + " seconds ago"; }
			if (diff < minute * 2) { return "1 minute ago"; }
			if (diff < hour) { return Math.floor(diff / minute) + " minutes ago"; }
			if (diff < hour * 2) { return "1 hour ago"; }
			if (diff < day) { return  Math.floor(diff / hour) + " hours ago"; }
			if (diff > day && diff < day * 2) { return "1 day ago"; }
			if (diff < day * 365) { return Math.floor(diff / day) + " days ago"; }
			else { return "over a year ago"; }
		}, // timeAgo()
		 
		ify: {
			link: function(tweet) { // twitter link string replace function
				return tweet.replace(/\b(((https*\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g, function(link, m1, m2, m3, m4) {
					var http = m2.match(/w/) ? 'http://' : '';
					return '<a class="twtr-hyperlink" target="_blank" href="' + http + m1 + '">' + ((m1.length > 25) ? m1.substr(0, 24) + '...' : m1) + '</a>' + m4;
				});
			},
			
			at: function(tweet) { // twitter at (@) character format function
				return tweet.replace(/\B[@@]([a-zA-Z0-9_]{1,20})/g, function(m, username) {
					return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/intent/user?screen_name=' + username + '">@' + username + '</a>';
				});
			},
			
			list: function(tweet) { // twitter list string format function
				return tweet.replace(/\B[@@]([a-zA-Z0-9_]{1,20}\/\w+)/g, function(m, userlist) {
					return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/' + userlist + '">@' + userlist + '</a>';
				});
			},
			
			hash: function(tweet) { // twitter hash (#) string format function
				return tweet.replace(/(^|\s+)#(\w+)/gi, function(m, before, hash) {
					return before + '<a target="_blank" class="twtr-hashtag" href="http://twitter.com/search?q=%23' + hash + '">#' + hash + '</a>';
				});
			},
			
			clean: function(tweet) { // twitter clean all string format function
				return this.hash(this.at(this.list(this.link(tweet))));
			}
		} // ify
	};
	
	//-------------------- End twitter integration with jQuery --------------------//
	
	//-------------------- Start Go Up --------------------//
	
	jQuery(window).scroll(function () {
		if(jQuery(this).scrollTop() > 200 ) {
			jQuery(".go-up").css("right","20px");
		}else {
			jQuery(".go-up").css("right","-60px");
		}
	});
	jQuery(".go-up").on('click',(function(){
		jQuery("html,body").animate({scrollTop:0},500);
		return false;
	}));
	
	/* ==============================================
	Preloader
	=============================================== */

$(window).load(function(){
    $("#preloader").delay(500).fadeOut(1000);
        $(".preload-logo").addClass('fadeOutLeft');
		$(".back-logo").addClass('fadeOutRight');
		$(".preload-gif").addClass('fadeOutUp');
    
});

//color
      jQuery('#style-selector').animate({
      left: '-213px'
    });

    jQuery('#style-selector a.close').click(function(e){
      e.preventDefault();
      var div = jQuery('#style-selector');
      if (div.css('left') === '-213px') {
        jQuery('#style-selector').animate({
          left: '0'
        });
        jQuery(this).removeClass('icon-angle-left');
        jQuery(this).addClass('icon-angle-right');
      } else {
        jQuery('#style-selector').animate({
          left: '-213px'
        });
        jQuery(this).removeClass('icon-angle-right');
        jQuery(this).addClass('icon-angle-left');
      }
    });

	//-------------------- End Color --------------------//
	
});
	
	
 /* ]]> */