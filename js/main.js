// HOVER SETTINGS

$("#menu-dixi").mouseenter(function() {
	$("#menu-dixi img").attr("src", "pics/menu/dixi-selected.png");
});

$("#menu-dixi").mouseleave(function() {
	$("#menu-dixi img").attr("src", "pics/menu/dixi.png");
});

$("#menu-portfolio").mouseenter(function() {
	$("#menu-portfolio img").attr("src", "pics/menu/portfolio-selected.png");
});

$("#menu-portfolio").mouseleave(function() {
	$("#menu-portfolio img").attr("src", "pics/menu/portfolio.png");
});

$("#menu-about").mouseenter(function() {
	$("#menu-about img").attr("src", "pics/menu/about-selected.png");
});

$("#menu-about").mouseleave(function() {
	$("#menu-about img").attr("src", "pics/menu/about.png");
});

// MAIN MENU SELECTIONS

$("#menu-about").click(function() {
	$("#menu-about img").attr("src", "pics/menu/about-selected.png");
	$("header").addClass('small');
	$("#portfolio-sections").addClass('invisible');
	$("#body-background").removeClass('blank');
	$("#aboutme-text").removeClass('invisible');
	$(".covers-container").addClass('invisible');
	$("article").addClass('hidden');
	$("#linkedin").attr('src', 'pics/menu/linkedin.png');
	$("#behance").attr('src', 'pics/menu/behance.png');
	$("#CV").attr('src', 'pics/menu/CV.png');
	$("#email-link img").attr('src', 'pics/menu/email.png');
	$("#email-link span").css('color', 'white');
});

$("#menu-dixi").click(function() {
	$("header").removeClass('small');
	$("#portfolio-sections").addClass('invisible');
	$("#body-background").removeClass('blank');
	$("#aboutme-text").removeClass('invisible');
	$(".covers-container").addClass('invisible');
	$("article").addClass('hidden');
	$("#linkedin").attr('src', 'pics/menu/linkedin.png');
	$("#behance").attr('src', 'pics/menu/behance.png');
	$("#CV").attr('src', 'pics/menu/CV.png');
	$("#email-link img").attr('src', 'pics/menu/email.png');
	$("#email-link span").css('color', 'white');
});

$("#menu-portfolio").click(function() {
	$("header").addClass('small');
	$("#portfolio-sections").removeClass('invisible');
	$("#body-background").addClass('blank');
	$("#aboutme-text").addClass('invisible');
	$(".covers-container").removeClass('invisible');
	$("article").addClass('hidden');
	$("#linkedin").attr('src', 'pics/menu/linkedin.png');
	$("#behance").attr('src', 'pics/menu/behance.png');
	$("#CV").attr('src', 'pics/menu/CV.png');
	$("#email-link img").attr('src', 'pics/menu/email.png');
	$("#email-link span").css('color', 'white');
});

// PORTFOLIO SECTIONS ARROWS

var carouselImgNumber = 7;
var carouselContentWidth = $('.portfolio-section img').width()*carouselImgNumber;
var carouselContainerWidth = $('#covers').width();
var arrowClicks = 0;
var scrollArea = carouselContentWidth - carouselContainerWidth;
var scrollSize = scrollArea / 4;

// want to use marginLeft var istead of line 99
// what is marginLeft (lines 90, 101)?

$('#next').click(function(event) {
	var currentPosition = $( document ).scrollLeft();
	$( document ).scrollLeft( currentPosition + scrollSize );
	event.preventDefault();
});

$('#previous').click(function(event) {
	arrowClicks--;
	var carouselImgWidth = $('.portfolio-section img').width();
	event.preventDefault();
	if(!($('#covers').css('margin-left') === '0px')){
  $('#covers').animate({
    marginLeft: '+=' + scrollSize + 'px'
  }, "fast");
	};
});

// PORTFOLIO SECTIONS MENU

$(".portfolio-section").click(function() {
  $("article").removeClass('hidden');
  $(".covers-container").addClass('invisible');
  $("#linkedin").attr('src', 'pics/menu/linkedin-black.png');
  $("#behance").attr('src', 'pics/menu/behance-black.png');
  $("#CV").attr('src', 'pics/menu/CV-black.png');
  $("#email-link img").attr('src', 'pics/menu/email-black.png');
  $("#email-link span").css('color', 'black');
});

// PROJECT PAGES

function updateContent(page) {
	var contentObject;

	if(page == 'retail') {
		contentObject = retail;
		$("#pic-gallery").removeClass("horizontal");
		$("#pic-gallery").addClass("vertical");
	}
	else if(page == 'web') {
		contentObject = web;
		$("#pic-gallery").removeClass("horizontal");
		$("#pic-gallery").addClass("vertical");
	}
	else if(page == 'branding') {
		contentObject = branding;
		$("#pic-gallery").removeClass("horizontal");
		$("#pic-gallery").addClass("vertical");
	}
	else if(page == 'infographics') {
		contentObject = infographics;
		$("#pic-gallery").removeClass("vertical");
		$("#pic-gallery").addClass("horizontal");
	}
	else if(page == 'packaging') {
		contentObject = packaging;
		$("#pic-gallery").removeClass("horizontal");
		$("#pic-gallery").addClass("vertical");
	}
	else if(page == 'interior') {
		contentObject = interior;
		$("#pic-gallery").removeClass("horizontal");
		$("#pic-gallery").addClass("vertical");
	}
	else if(page == 'various') {
		contentObject = poster;
		$("#pic-gallery").removeClass("horizontal");
		$("#pic-gallery").addClass("vertical");
	}

	$("#project-title").empty();
	$("#project-intro").empty();
	$("#project-credits").empty();
	$("#pic-gallery").empty();

	contentObject.images.forEach(function(entry) {
		$("#pic-gallery").append('<img src="'+entry+'"/>');
	});

	$("#project-title").text(contentObject.title);
	$("#project-intro").text(contentObject.text);
	$("#project-credits").text(contentObject.credits);
}

// HOW IT SHOULD WORK

/*
var contentObject = updateContent.val();

function updateContent() {
	$("#project-title").empty();
	$("#project-intro").empty();
	$("#project-credits").empty();
	$("#pic-gallery").empty();

	$("#project-title").text(contentObject.title);
	$("#project-intro").text(contentObject.text);
	$("#project-credits").text(contentObject.credits);

	contentObject.images.forEach(function(entry) {
		$("#pic-gallery").append("<img src="'+entry+'"/>");
	});
}
*/
