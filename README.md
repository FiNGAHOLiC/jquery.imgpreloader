# jquery.imgpreloader.js

jquery.imgpreloader.js is a simple image preloader plugin. $.imgpreloader returns jQuery deferred object.

## Demo

http://fingaholic.github.com/jquery.imgpreloader/

## Usage

### Options

* **ignoreBroken** `Boolean` Ignore if image is broken.
* **paths** `Array` Image paths.

```javascript
var defer = $.imgpreloader({
	ignoreBroken: true,
	paths: [ './img/example1/1.jpg' ]
});
```

### Deferred

* **Resolved** Deferred is resolved when all images have been loaded or set **ignoreBroken** options true.
* **Rejected** Deferred is rejected when at least one image is broken, and set **ignoreBroken** options false.
* **Notified** Deferred is notified every time an image has finished loading.

```javascript
// Save a deferred object
var defer = $.imgpreloader({
	ignoreBroken: true,
	paths: [
		'./img/1.jpg',
		'./img/2.jpg',
		'./img/3.jpg'
	]
});

// Resolved
defer.done(function($imgs){
	// $imgs: the jQuery object with all images
});

// Rejected
defer.fail(function($imgs){
	// $imgs: the jQuery object with all images
});

// Notified
defer.progress(function($img, per){
	// $img: the jQuery object with one image
	// per: percentage loaded
});
```

## Requirements

jQuery 1.7.x or higher.

## Browsers

IE6+ and other new browsers.

## License

Licensed under the MIT license.
