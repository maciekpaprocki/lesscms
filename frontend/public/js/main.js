!function(a){a.fn.tabs=function(t){t=a.extend({tabsNav:"nav.tabs-nav a",tabsContent:".tabs-tab",on:"click hover",firsActive:!1},t),this.each(function(){var i=a(this),n=i.find(t.tabsNav),s=i.find(t.tabsContent),e=n.add(s);n.on(t.on,function(){e.removeClass("active").attr("aria-hidden","true"),s.filter(a(this).addClass("active").data("for")).addClass("active").attr("aria-hidden","false")}),t.firsActive&&n.first().click()})},a(".tabs").tabs()}(jQuery);