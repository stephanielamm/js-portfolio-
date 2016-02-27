$(document).ready(function() { init()})

function init() {
//Tabletop.init( { key: 'link here',
                  //callback: portfolio,
                  //simpleSheet: true } )
};

//function portfolio(data, tabletop) {
	//var clip_data = data;
//	_.each(data, function(e, idx, list){
	//	var compiled = _.template($('script.template-portfolio').html());
	//	$('#portfolio-list').append(compiled({ 'clip': e }));
	//	console.log(e.title);
	//});
//};

// 	$("#result").load("index.html"), function(){
// 		$('.portfolio-expand').removeClass('active');
// 		$('.resume-expand').removeClass('active');
// 		$('.contact-expand').removeClass('active');
// 		$('.about-expand').removeClass('active');
// 		$('.home-expand').addClass('active');
// }


$('.home').on('click', function(){
	$('.portfolio-expand').removeClass('active');
	$('.resume-expand').removeClass('active');
  $('.contact-expand').removeClass('active');
	$('.about-expand').removeClass('active');
  $('.home-expand').addClass('active');
});

$('.about').on('click', function(){
  $('.home-expand').removeClass('active');
	$('.portfolio-expand').removeClass('active');
	$('.resume-expand').removeClass('active');
  $('.contact-expand').removeClass('active');
	$('.about-expand').addClass('active');
});

$('.resume').on('click', function(){
	$('.portfolio-expand').removeClass('active');
  $('.home-expand').removeClass('active');
	$('.about-expand').removeClass('active');
  $('.contact-expand').removeClass('active');
	$('.resume-expand').addClass('active');
});

$('.portfolio').on('click', function(){
	$('.resume-expand').removeClass('active');
  $('.home-expand').removeClass('active');
	$('.about-expand').removeClass('active');
  $('.contact-expand').removeClass('active');
	$('.portfolio-expand').addClass('active');
});

$('.contact').on('click', function(){
	$('.resume-expand').removeClass('active');
  $('.home-expand').removeClass('active');
	$('.about-expand').removeClass('active');
	$('.portfolio-expand').removeClass('active');
  $('.contact-expand').addClass('active');
});
