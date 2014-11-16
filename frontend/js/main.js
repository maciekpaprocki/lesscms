(function($) {
    $.fn.tabs = function(options) {
        options = $.extend({
            tabsNav: 'h3',
            tabsContent: '.tabs-tab'
        }, options);
        this.each(function() {
            var $this = $(this),
                    $nav = $this.find(options.tabsNav),
                    $tabs = $this.find(options.tabsContent),
                    $all = $nav.add($tabs);
            $nav.click(function() {
                $all.removeClass('active');
                $tabs.filter($(this).addClass('active').data('for')).addClass('active'); 
            });
            $nav.first().click();
        });
    };
    $('.tabs').tabs();
})(jQuery);