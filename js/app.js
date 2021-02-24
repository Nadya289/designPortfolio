$(function() {


    /* Filter
    =====================*/
    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if(cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function() {
                let workCat = $(this).data('cat');

                if(workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });




    /* Modal
    =====================*/

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);
        $("#slider").slick("setPosition");
    });


    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });


    $(".modal").on("click", function(event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });

// SLIDER https://kenwheeler.github.io/slick/
	$('[data-sleder="slick"]').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade:true,
		arrows:false,
		dots:true
});

	$(".slickPrev").on("click", function(event){
		event.preventDefault();

		let currentSlider =
		$(this).parents(".modal").find('[data-sleder="slick"]');

		currentSlider.slick("slickPrev");
	});

		$(".slickNext").on("click",function(event){
			event.preventDefault();

			let currentSlider =
		$(this).parents(".modal").find('[data-sleder="slick"]');

		currentSlider.slick("slickNext");

});
// Mobile nav BURGER
    const navToggle= $("#navToggle");
    const nav = $("#nav");

    $("#navToggle").on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");

    });

// fixed header

 let header = $("#header");
 let intro = $("#intro");
  let introH = intro.innerHeight();
 let scrollPos = $(window).scrollTop();

 $(window).on("scroll load resize", function(){
     let introH = intro.innerHeight();

    scrollPos = $(this).scrollTop();

    if(scrollPos > introH) {
        header.addClass("fixed");
       }else{
         header.removeClass("fixed");


        }
    });
// Smooth scroll

$("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    console.log(elementOffset);
    $("html, body").animate({
        scrollTop:elementOffset - 90
    });
});

 });







