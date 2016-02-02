bootstrap-carousel
==================

Bootstrap-carousel is a wrapper of the Carousel plugin from Bootstrap. The plugin main object is to reduce the typing from creating a new Carousel while automating some tasks.

## About the plugin

Plugin developed in the book [Bootstrap by Example](https://www.packtpub.com/web-development/bootstrap-example)
Copyright 2016 PACKT Publishing.

Licensed under MIT

## Usage

Load the plugin:

    <script src="js/bootstrap-carousel.js"></script>

Create this HTML:

    <div id="carousel-notification" class="bootstrap-carousel" data-indicators="true" data-controls="true">
        <img src="imgs/doge.jpg" data-title="doge" data-content="Hey there!">
        <img src="imgs/laika.jpg" data-title="laika" data-content="Hey ...!">
        <img src="imgs/cat.jpg" data-title="cat">
    </div>

Start the plugin via JavaScript:

    $('#carousel-notification').bCarousel();

Or if you add the class `.bootstrap-carousel` to the outmost element the plugin will automatically load.

Fow each image inside the `.bootstrap-carousel` provide:

 - A `data-title` for the caption title
 - A `data-content` for the caption content

## Options

The options can be passed through plugin initialization or data attributes:

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

test

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
