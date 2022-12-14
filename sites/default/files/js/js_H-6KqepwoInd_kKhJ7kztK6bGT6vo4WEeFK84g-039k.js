/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, storage) {
  var currentUserID = parseInt(drupalSettings.user.uid, 10);
  var secondsIn30Days = 2592000;
  var thirtyDaysAgo = Math.round(new Date().getTime() / 1000) - secondsIn30Days;
  var embeddedLastReadTimestamps = false;

  if (drupalSettings.history && drupalSettings.history.lastReadTimestamps) {
    embeddedLastReadTimestamps = drupalSettings.history.lastReadTimestamps;
  }

  Drupal.history = {
    fetchTimestamps: function fetchTimestamps(nodeIDs, callback) {
      if (embeddedLastReadTimestamps) {
        callback();
        return;
      }

      $.ajax({
        url: Drupal.url('history/get_node_read_timestamps'),
        type: 'POST',
        data: {
          'node_ids[]': nodeIDs
        },
        dataType: 'json',
        success: function success(results) {
          Object.keys(results || {}).forEach(function (nodeID) {
            storage.setItem("Drupal.history.".concat(currentUserID, ".").concat(nodeID), results[nodeID]);
          });
          callback();
        }
      });
    },
    getLastRead: function getLastRead(nodeID) {
      if (embeddedLastReadTimestamps && embeddedLastReadTimestamps[nodeID]) {
        return parseInt(embeddedLastReadTimestamps[nodeID], 10);
      }

      return parseInt(storage.getItem("Drupal.history.".concat(currentUserID, ".").concat(nodeID)) || 0, 10);
    },
    markAsRead: function markAsRead(nodeID) {
      $.ajax({
        url: Drupal.url("history/".concat(nodeID, "/read")),
        type: 'POST',
        dataType: 'json',
        success: function success(timestamp) {
          if (embeddedLastReadTimestamps && embeddedLastReadTimestamps[nodeID]) {
            return;
          }

          storage.setItem("Drupal.history.".concat(currentUserID, ".").concat(nodeID), timestamp);
        }
      });
    },
    needsServerCheck: function needsServerCheck(nodeID, contentTimestamp) {
      if (contentTimestamp < thirtyDaysAgo) {
        return false;
      }

      if (embeddedLastReadTimestamps && embeddedLastReadTimestamps[nodeID]) {
        return contentTimestamp > parseInt(embeddedLastReadTimestamps[nodeID], 10);
      }

      var minLastReadTimestamp = parseInt(storage.getItem("Drupal.history.".concat(currentUserID, ".").concat(nodeID)) || 0, 10);
      return contentTimestamp > minLastReadTimestamp;
    }
  };
})(jQuery, Drupal, drupalSettings, window.localStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (window, Drupal, drupalSettings) {
  window.addEventListener('load', function () {
    if (drupalSettings.history && drupalSettings.history.nodesToMarkAsRead) {
      Object.keys(drupalSettings.history.nodesToMarkAsRead).forEach(Drupal.history.markAsRead);
    }
  });
})(window, Drupal, drupalSettings);;
;
(function ($, drupalSettings) {
  Drupal.behaviors.drupalSlider = {
    attach: function (context, settings) {
      var values = settings.drupalSlider;
      var autoplay = values.autoplay ? true : false;
      var autoplayDelay = values.autoplayDelay ? values.autoplayDelay : 5000;
      var arrows = values.arrows ? true : false;
      var buttons = values.buttons ? true : false;
      var shuffle = values.shuffle ? true : false;
      var full_screen = values.full_screen ? true : false;
      var fade = values.fade ? true : false;
      var loop = values.loop ? true : false;
      var orientation = values.orientation ? 'vertical' : 'horizontal';
      var thumbnails_position = values.thumbnails_position;
      if (values.carousel) {
        $('#'+values.id, context).once('drupalSliderBehavior').sliderPro({     
          arrows: arrows,
          buttons: buttons,
          loop: loop,
          fullScreen: full_screen,
          shuffle: shuffle,
          autoplay: autoplay,
          autoplayDelay: autoplayDelay,
          smallSize: 500,
          mediumSize: 1000,
          largeSize: 3000,   
          waitForLayers: true,
          autoScaleLayers: true,  
          visibleSize: '100%',    
        });
      } else {
        $('#'+values.id, context).once('drupalSliderBehavior').sliderPro({
          width: values.width,
          height: values.height,       
          orientation: orientation,
          thumbnailsPosition: thumbnails_position, 
          loop: loop,
          fade: fade,
          arrows: arrows,
          buttons: buttons,
          fullScreen: full_screen,
          shuffle: shuffle,
          autoplay: autoplay,
          autoplayDelay: autoplayDelay,
          smallSize: 500,
          mediumSize: 1000,
          largeSize: 3000,   
          waitForLayers: false,
          autoScaleLayers: false,           
        });  
      }
    }
  };

})(jQuery, drupalSettings);;
