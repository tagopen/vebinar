/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// Old browser notification
$(function() { 
  $.reject({
    reject: {
      msie: 9
    },
    imagePath: 'img/icons/jReject/',
    display: [ 'chrome','firefox','safari','opera' ],
    closeCookie: true,
    cookieSettings: {
      expires: 60*60*24*365
    },
    header: 'Ваш браузер устарел!',
    paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
    paragraph2: 'Пожалуйста, установите современный браузер:',
    closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
    closeLink: 'Закрыть это уведомление',
  });
});

// Equal Height function
function setEqualHeight(columns)
{
  var tallestcolumn = 0;
  columns.each(
    function()
    {
      currentHeight = $(this).height();
      if(currentHeight > tallestcolumn)
      {
        tallestcolumn = currentHeight;
      }
    }
    );
  columns.height(tallestcolumn);
}
// Equial Height
$(window).on('resize', function(){
  // Only 768px +
  if( $( window ).width() >= 768 ) {
    // User section
    setEqualHeight($('.user__name'));
  }
}).trigger('resize');

// Masked phone
$(function($){
  $(".form__input--phone").mask("+38 (999) 999-99-99");
});

$('.countdown > .row').countdown('2017/02/05', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<div class="col-xs-4 col-md-3"><div class="countdown__elem">%d<div class="countdown__text">Дней</div></div></div> '
    + '<div class="col-xs-4 col-md-3"><div class="countdown__elem">%H<div class="countdown__text">Часов</div></div></div> '
    + '<div class="col-xs-4 col-md-3"><div class="countdown__elem">%M<div class="countdown__text">Минут</div></div></div> '));
});
