(function ($) {
    $.fn.tabs = function (options) {
        options = $.extend({
            tabsNav: 'nav.tabs-nav a',
            tabsContent: '.tabs-tab',
            on:'click hover',
            firsActive:false
        }, options);

        this.each(function () {
            var $this = $(this),
                    $nav = $this.find(options.tabsNav),
                    $tabs = $this.find(options.tabsContent),
                    $all = $nav.add($tabs);
            $nav.on(options.on,function () {
                $all.removeClass('active').attr('aria-hidden', 'true');
                $tabs.filter($(this).addClass('active').data('for')).addClass('active').attr('aria-hidden', 'false');
            });
            if(options.firsActive){
                $nav.first().click();
            }
            
        }); 
    }; 
    $('.tabs').tabs();
})(jQuery);