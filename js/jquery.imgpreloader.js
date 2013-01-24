/*!
 * jquery.imgpreloader.js
 *
 * @modified  2012/01/24
 * @requires  jQuery 1.7.x or later
 * @version   1.0.0
 * @author    FiNGAHOLiC
 * @link      https://github.com/FiNGAHOLiC/jquery.imgpreloader
 * @license   The MIT License
 *
 */

;(function($, window, document, undefined){

	$.imgpreloader = $.imgpreloader || function(options){
		var o = $.extend({
			ignoreBroken: false,
			paths: []
		}, options);
		return $.Deferred(function(defer){
			var $proper = [], $broken = [], count = 0, imgpaths = o.paths.length;
			var handler = function($elems, $elem){
				count++;
				$elems.push($elem);
				defer.notify($elem, Math.floor(count / imgpaths * 100));
				if(count === imgpaths){
					if($broken.length && !o.ignoreBroken){
						defer.reject($broken);
					}else{
						defer.resolve($proper);
					};
				};
			};
			if(!$.isArray(o.paths) || !imgpaths){
				defer.reject();
			}else{
				$.each(o.paths, function(i, src){
					$('<img>').on('load', function(){
						handler($proper, $(this));
					}).on('error', function(){
						handler($broken, $(this));
					}).attr('src', src);
				});
			};
		}).promise();
	};

})(jQuery, window, this.document);

