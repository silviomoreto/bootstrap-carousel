bootstrap-carousel <span class="badge-paypal"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FSC9BZ4WTN57Y" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-blue.svg" alt="PayPal donate button" /></a></span>
==================

Bootstrap-carousel is a wrapper of the Carousel plugin from Bootstrap. The plugin main object is to reduce the typing from creating a new Carousel while automating some tasks.

## About the plugin

Plugin developed in the book [Bootstrap by Example](https://www.packtpub.com/web-development/bootstrap-example)
Copyright 2016 PACKT Publishing.

Acquire the book and learn how to create this plugin from scratch and much more __Bootstrap__ examples:

 - Create a __Landing Page__
 - Building a __Web Application__ just like Twitter
 - Full __Dashboard__
 - Hands-on the __Bootstrap 4!__

See more about the Book at [Bootstrap by Example](https://www.packtpub.com/web-development/bootstrap-example) oficial website or at [Amazon](http://www.amazon.com/Bootstrap-Example-Silvio-Moreto-Pereira/dp/1785288873). 

You can also make a <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FSC9BZ4WTN57Y" title="Donate to this project using Paypal">donation</a>. Thanks for supporting us! :smile:

## Usage

Load the plugin:
```html
    <script src="js/bootstrap-carousel.js"></script>
```
Create this HTML:
```html
    <div id="carousel-notification" class="bootstrap-carousel">
        <img src="imgs/doge.jpg" data-title="doge" data-content="Hey there!">
        <img src="imgs/laika.jpg" data-title="laika" data-content="Hey ...!">
        <img src="imgs/cat.jpg" data-title="cat">
    </div>
```
Start the plugin via JavaScript:
```js
    $('#carousel-notification').bCarousel();
```
Or if you add the class `.bootstrap-carousel` to the outmost element the plugin will automatically load.

For each image inside the `.bootstrap-carousel` provide:

 - A `data-title` for the caption title
 - A `data-content` for the caption content

The result is a Carousel, just like the one of Bootstrap:

![](https://raw.githubusercontent.com/silviomoreto/bootstrap-carousel/master/example_screenshot.png?token=ACQPDwUGFutLR2lkK8IMJy-fvBAxSQiQks5WuW9UwA%3D%3D)

__OBS__: Just like for the Bootstrap original Carousel, you must provide an `id` for the outmost element, in this example above, we used `#carousel-notification`.

## Options

The options can be passed through JavaScript plugin initialization or data attributes:

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| indicators | boolean | true | Display the bullet indicators |
| controls | boolean | true | Display the navigation controls |
| defaultTitle | string | `''` | Default caption title for a slide |
| defaultContent | string | `''` | Default caption content for a slide |
| nextIcon | string | `'glyphicon glyphicon-chevron-right'` | Default next icon |
| previousIcon | string | `'glyphicon glyphicon-chevron-left'` | Default previous icon |
| nextText | string | `'Next'` | Default next text |
| previousText | string | `'Previous'` | Default previous text |
| interval | integer | `5000` | Interval to change slide |
| pause | string | `'hover'` | Action for pause slide show |
| wrap | boolean | true | Whether cycle or not the carousel |
| keyboard | boolean | true | Whether the carousel react to keyboard |

## Methods

- `.bCarousel('load')`: Reload the carousel.
- `.bCarousel('addSlide', 'imgSrc', 'imgTitle', 'imgContent')`: Add a new slide to the carousel. `imgSrc` correspond to the image source; `imgTitle` is the caption title; and `imgContent` is the caption content.
