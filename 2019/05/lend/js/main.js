/*Date*/
	var lang = $('html').attr('lang');
	var d = new Date();
	var months;
	if (lang == "ru"){
		months = ["января","Февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
	}else if (lang == "he"){
		months = ["בינואר","בפברואר","במרץ","באפריל","במאי","ביוני","ביולי","באוגוסט","בספטמבר","באוקטובר","בנובמבר","בדצמבר"];
	}
	d.setDate(d.getDate() + 14);
	$('.sale-date').html(d.getDate() + " " + months[d.getMonth()]);



    // Video in Modal
    function videoInModal() {
        var videosItemModal = false;
        var videosItem = $('.videos-item');
        if (videosItem.length) {
            videosItem.off().on('click', function() {
                var $thisVideo = $(this);
                var videosId = $thisVideo.data('ytb');
                if ($thisVideo.hasClass('videos-item_modal')){
                videosItemModal = true;
                }
                var videoBlock =
                    '<div class="frame-wrap">' +
                    '<div class="videos-frame">' +
                    '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + 'w4t3pE7NUhE' + '?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' +
                    '</div>' +
                    '</div>';
                if(videosItemModal){
                    videoBlock = '<div id="ytb-modal" class="videos-modal">' +
                                    '<div id="ytb-overlay" class="modal-overlay"></div>' +
                                    '<div id="ytb-close" class="modal-close">&times;</div>' +
                                        videoBlock +
                                '</div>';
                    $body.addClass('modal-opened').append(videoBlock);
                    $('#ytb-overlay').add('#ytb-close').on('click', function() {
                        $(this).parent().remove();
                        $body.removeClass('modal-opened');
                    });
                }else{
                    $thisVideo.append(videoBlock);
                    $thisVideo.off('click');
                }
            });
        }
    }
    videoInModal();


// Scroll to

$("#contact-us").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact_form").offset().top
    }, 2000);
});
