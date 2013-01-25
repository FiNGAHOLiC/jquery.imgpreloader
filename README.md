# jquery.imgpreloader.js

jquery.imgpreloader.js is a simple image preloader plugin.

$.imgpreloader returns jQuery deferred object.

## Demo

http://fingaholic.github.com/jquery.imgpreloader/

## Usage

### Options

* **paths** `Array` Image paths.

```javascript
var defer = $.imgpreloader({
	paths: [ './img/example1/1.jpg' ]
});
```

### Deferred

* **Resolved** Deferred is resolved when all images have been loaded.
* **Rejected** Deferred is rejected when at least one image is broken.
* **Notified** Deferred is notified every time an image has finished loading.

```javascript
// Save a deferred object
var defer = $.imgpreloader({
	paths: [
		'./img/1.jpg',
		'./img/2.jpg',
		'./img/3.jpg'
	]
});

// Always
defer.always(function($allImages, $properImages, $brokenImages){
	// $allImages: jQuery object with all images
	// $properImages: jQuery object with properly loaded images
	// $brokenImages: jQuery object with broken images
});

// Resolved
defer.done(function($allImages){
	// $allImages: jQuery object with all images
});

// Rejected
defer.fail(function($allImages, $properImages, $brokenImages){
	// $allImages: jQuery object with all images
	// $properImages: jQuery object with properly loaded images
	// $brokenImages: jQuery object with broken images
});

// Notified
defer.progress(function($image, $allImages, $properImages, $brokenImages, isBroken, percentage){
	// $image: jQuery object with an image
	// $allImages: jQuery object with all images
	// $properImages: jQuery object with properly loaded images
	// $brokenImages: jQuery object with broken images
	// isBroken: broken or not
	// percentage: percentage of image loading
});
```

## Requirements

jQuery 1.7.x or later.

## Browsers

IE6+ and other new browsers.

## License

Licensed under the MIT license.
