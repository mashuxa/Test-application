$( document ).ready(function() { 
    
    
	// Navigation button collapse
	$('.js-collapse').click(function() {
		
		if ( $(this).hasClass('open') ) {
			$('.js-menu').slideUp('slow');
			$(this).removeClass('open');
		} else {
			$('.js-menu').slideDown('slow');
			$(this).addClass('open');
		}

		$(this).toggleClass('change');
	});

	// Resize window Navigation button
	$(window).resize(function(){
	
		if ( ( !$('.js-menu').hasClass('open') ) && ( $(window).width() >= 768 ) ) {
			$('.js-menu').css('display','block');
		} else { 
			$('.js-menu').css('display','none');
			$('.js-collapse').removeClass('open change');
		}
	});


	//show list
	$('.js-list').click(function() {
        
		$('.question-block-right').toggleClass('show-list');
		$('.question-block-left').toggleClass('question-not-full');
		$(this).find('i').toggleClass('icon-square-checked');
        $(this).toggleClass('active');
		return false;
	}); 
    
	//show right answer
	$('.js-show-answer').click(function() { 
		$(this).toggleClass('btn-active'); 
        $('.question-block-line:first-of-type').toggleClass('correct');
        $('.question-block-line:nth-of-type(3)').toggleClass('incorrect');
		return false;
	}); 

	// question block select
	$('.question-block-right ul li').not('.question-block-right ul li:first-child').click(function() {
		if ($(this).hasClass('active')) {
            return false;
        }
		$('.question-block-right ul li').removeClass('active');
		$(this).addClass('active'); 
	});


	// swich history tabs
	var cat_tab_active = $('.table_tabs .active').attr('href');
	$(cat_tab_active).css('display','block');

    $('.table_tabs a').click(function(e) {
    	if ($(this).hasClass('active')) {
            return false;
        }
        $('.table_tabs .active').removeClass('active');
        $(this).addClass('active');

        var cat_tab = $(this).attr('href');
        $('.table-wrapper').not(cat_tab).css('display','none');
        $('.settings-wrapper').not(cat_tab).css('display','none');
        $(cat_tab).fadeIn(400);
        e.preventDefault();
    });


    // scroll bars
    $(".settings-wrapper").mCustomScrollbar({
        theme:"dark-3",
        scrollInertia:0
    });
    $(".question-results").mCustomScrollbar({
        theme:"dark-3",
        scrollInertia:0
    });
    $(".question-block-left").mCustomScrollbar({
        theme:"dark-3",
        scrollInertia:0
    });
    $(".question-block-right").mCustomScrollbar({
        theme:"dark-3",
        scrollInertia:0
    });
    

    // switch topic page
    $('.switch.all').click(function() {

     	if ($(this).find('input').prop("checked")) {
     		$('.rest input:checkbox:checked').prop( "checked", false ).parent().addClass('selected');
     	} else {
     		$('.rest .selected input').prop( "checked", true );
     		$('.rest label').removeClass('selected');
     	}
     	
     });
     $('.rest label').click(function() {
  		if ($(this).find('input').prop("checked")) {
  			$('.switch.all').find('input').prop( "checked", false );
  			$('.rest label').removeClass('selected');
  		}
     });

//		vertical flex
    $(function () {
        function resizer () {
            if (window.innerWidth > 767) {
            //            height for ".bg-content"
            var winHeight = $("body").outerHeight();
            var bgHeaderBackHeight = $(".bg-header-back").outerHeight();
            var bgButtonsHeight = $(".bg-buttons").outerHeight();
            var bgFooterHeight = $(".bg-footer").outerHeight();
            var bgContentHeight = winHeight - bgHeaderBackHeight - bgButtonsHeight - bgFooterHeight;
            $(".bg-content.question-page").outerHeight(bgContentHeight);
            
//            height for .question-wrapper"
            var containerRowHeight = $(".container.row.content-block").outerHeight();
            var tabWrapperHeight = $(".tab-wrapper").outerHeight();
            var questionWrapperHeight =  containerRowHeight - tabWrapperHeight; 
            $(".question-page .question-wrapper").outerHeight(questionWrapperHeight); 
            
//            height for ".question-block .content"
            var questionBlockHeight = $(".question-block").outerHeight();
            var questionBlockHeaderHeight = $(".question-block-header").outerHeight();
            var questionBlockContentHeight = questionBlockHeight - questionBlockHeaderHeight;
            $(".question-page .question-block .content").outerHeight(questionBlockContentHeight); 
                };
        };
        $(window).ready(function () {
            
            resizer ();
    
        });
        $(window).resize(function () {
            
            resizer ();
 
        });
    })
    
    
    
    
});
