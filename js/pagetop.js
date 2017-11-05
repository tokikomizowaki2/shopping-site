/*! ページトップへをヌルヌルさせる動きを実装 */
$(function(){
 $("#PAGE_TOP a").click(function(){
 $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'slow','swing');
 return false;
 })
});
