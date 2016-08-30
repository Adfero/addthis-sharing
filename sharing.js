'use strict';
(function($) {
  $.fn.addthisSharing = function(_options) {
    var $this = $(this);
    var options = $.extend({
      'serviceAttribute': 'data-share-service',
      'titleAttribute': 'data-share-title',
      'descriptionAttribute': 'data-share-description',
      'URLAttribute': 'data-share-url',
      'pubIdAttribute': 'data-share-pubid',
      'serviceCallback': null,
      'URLCallback': null,
      'titleCallback': null,
      'descriptionCallback': null,
      'pubIdCallback': null,
      'apiRootURL': 'http://api.addthis.com/oexchange/0.8',
      'sharingWidthCallback': null,
      'sharingHeightCallback': null
    },_options || {});
    $this.each(function() {
      var $element = $(this);
      initShare($element);
    });

    function initShare($button) {
      var service = tryOptions($button,options.serviceAttribute,options.serviceCallback,false);
      var params = [
        ['url',tryOptions($button,options.URLAttribute,service,options.URLCallback,window.location.href)],
        ['title',tryOptions($button,options.titleAttribute,service,options.titleCallback,false)],
        ['description',tryOptions($button,options.descriptionAttribute,service,options.descriptionCallback,false)],
        ['pubid',tryOptions($button,options.pubIdAttribute,service,options.pubIdCallback,false)],
      ]
        .filter(function(paramSet) {
          return paramSet[1] !== false;
        })
        .map(function(paramSet) {
          return paramSet[0] + '=' + encodeURIComponent(paramSet[1]);
        })
        .join('&');
      var url = options.apiRootURL + (service ? ('/forward/' + service + '/offer') : '/offer') + '?' + params;
      var shareParams = [
        'location=0',
        'status=1',
        'scrollbars=1',
        'width=' + (options.sharingWidthCallback ? options.sharingWidthCallback(service) : (service ? 675 : 650)),
        'height=' + (options.sharingHeightCallback ? options.sharingHeightCallback(service) : (service ? 300 : 500))
      ]
      $button.on('click',function() {
        window.open(url,'_blank',shareParams.join(','));
      });
    }

    function tryOptions($element,attribute,service,callback,fallback) {
      if (attribute && service && $element.attr(attribute + '-' + service)) {
        return $element.attr(attribute + '-' + service);
      } else if (attribute && $element.attr(attribute)) {
        return $element.attr(attribute);
      } else if (callback) {
        return callback(service,$element);
      } else {
        return fallback;
      }
    }
  }
})(jQuery);
