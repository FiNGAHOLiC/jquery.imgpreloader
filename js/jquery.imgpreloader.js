/*!
 * jquery.imgpreloader.js
 *
 * @modified  2013/02/01
 * @requires  jQuery 1.7.x or later
 * @version   1.1.4
 * @author    FiNGAHOLiC
 * @link      https://github.com/FiNGAHOLiC/jquery.imgpreloader
 * @license   The MIT License
 *
 */

;(function($, window, document, undefined){

	$.imgpreloader = $.imgpreloader || function(options){
		var o = $.extend({ paths: [] }, options);
		return $.Deferred(function(defer){
			var loopCount = 0,
			    pathLength = o.paths.length,
			    $allImages = $(),
			    $properImages = $(),
			    $brokenImages = $(),
			    handler = function($image, isBroken){
				loopCount = loopCount + 1;
				$allImages = $allImages.add($image);
				defer.notify(
					$image,
					$allImages,
					$properImages,
					$brokenImages,
					isBroken,
					Math.floor(loopCount / pathLength * 100)
				);
				if(loopCount === pathLength){
					if($brokenImages.length){
						defer.reject($allImages, $properImages, $brokenImages);
					}else{
						defer.resolve($allImages);
					};
				};
			};
			if(!$.isArray(o.paths) || !pathLength){
				defer.reject();
			}else{
				$.each(o.paths, function(i, src){
					$('<img>').on('load', function(){
						var $image = $(this);
						$properImages = $properImages.add($image);
						handler($image, false);
					}).on('error', function(){
						var $image = $(this);
						$brokenImages = $brokenImages.add($image);
						handler($image, true);
					}).attr('src', src);
				});
			};
		}).promise();
	};

})(jQuery, window, this.document);

