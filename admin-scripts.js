(function($){$.fn.aToolTip=function(options){var defaults={closeTipBtn:'aToolTipCloseBtn',toolTipId:'aToolTip',fixed:false,clickIt:false,inSpeed:200,outSpeed:100,tipContent:'',toolTipClass:'defaultTheme',xOffset:5,yOffset:5,onShow:null,onHide:null},settings=$.extend({},defaults,options);return this.each(function(){var obj=$(this);if(obj.attr('title')){var tipContent=obj.attr('title');}else{var tipContent=settings.tipContent;}
var buildaToolTip=function(){$('body').append("<div id='"+settings.toolTipId+"' class='"+settings.toolTipClass+"'><p class='aToolTipContent'>"+tipContent+"</p></div>");if(tipContent&&settings.clickIt){$('#'+settings.toolTipId+' p.aToolTipContent').append("<a id='"+settings.closeTipBtn+"' href='#' alt='close'>close</a>");}},positionaToolTip=function(){$('#'+settings.toolTipId).css({top:(obj.offset().top-$('#'+settings.toolTipId).outerHeight()-settings.yOffset)+'px',left:(obj.offset().left+obj.outerWidth()+settings.xOffset)+'px'}).stop().fadeIn(settings.inSpeed,function(){if($.isFunction(settings.onShow)){settings.onShow(obj);}});},removeaToolTip=function(){$('#'+settings.toolTipId).stop().fadeOut(settings.outSpeed,function(){$(this).remove();if($.isFunction(settings.onHide)){settings.onHide(obj);}});};if(tipContent&&!settings.clickIt){obj.hover(function(){$('#'+settings.toolTipId).remove();obj.attr({title:''});buildaToolTip();positionaToolTip();},function(){removeaToolTip();});}
if(tipContent&&settings.clickIt){obj.click(function(el){$('#'+settings.toolTipId).remove();obj.attr({title:''});buildaToolTip();positionaToolTip();$('#'+settings.closeTipBtn).click(function(){removeaToolTip();return false;});return false;});}
if(!settings.fixed&&!settings.clickIt){obj.mousemove(function(el){$('#'+settings.toolTipId).css({top:(el.pageY-$('#'+settings.toolTipId).outerHeight()-settings.yOffset),left:(el.pageX+settings.xOffset)});});}});};})(jQuery);

 jQuery(document).ready(function(){

  jQuery('a.ttip').aToolTip({ fixed: true  });

 
  });