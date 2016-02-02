/* ========================================================================
 * Bootstrap-carousel by @silviomoreto
 * Bootstrap-carousel is a wrapper of the Carousel plugin from Bootstrap
 * The plugin main object is to reduce the typing from creating
 * a new Carousel while automating some tasks.
 *
 * Plugin developed in the book Bootstrap by Example
 * https://www.packtpub.com/web-development/bootstrap-example
 *
 * Copyright 2016 PACKT Publishing.
 * ========================================================================
 * Licensed under MIT
 * ======================================================================== */


+function ($) {
  'use strict';

  // BOOTSTRAP CAROUSEL CLASS DEFINITION
  // ======================
  var BootstrapCarousel   = function (element, options) {
    this.$element = $(element);
    this.options = $.extend({}, BootstrapCarousel.DEFAULTS, options);

    // Expose public methods
    this.addSlide = BootstrapCarousel.prototype.addSlide;
    this.reload = BootstrapCarousel.prototype.load;

    this.init();
  }

  BootstrapCarousel.VERSION = '1.0.0'
  BootstrapCarousel.DEFAULTS = {
    indicators: true,
    controls: true,
    defaultTitle: '',
    defaultContent: '',
    nextIcon: 'glyphicon glyphicon-chevron-right',
    nextText: 'Next',
    previousIcon: 'glyphicon glyphicon-chevron-left',
    previousText: 'Previous',
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true,
  };

  BootstrapCarousel.prototype = {
    template: {
      slide: '<img class="hide" src="{itemImg}" data-title="{itemTitle}" data-content="{itemContent}">',
      carouselInner: '<div class="carousel-inner" role="listbox">{innerContent}</div>',
      carouselItem: '' +
        '<div class="item {activeClass}">' +
          '<img src="{itemImg}">' +
          '<div class="carousel-caption">' +
            '<h3>{itemTitle}</h3>' +
            '<p>{itemContent}</p>' +
          '</div>'+
        '</div>',
      carouselIndicator: '<ol class="carousel-indicators">{indicators}</ol>',
      carouselIndicatorItem: '<li data-target="#{elementId}" data-slide-to="{slideNumber}" {activeClass}></li>',
      carouselControls: '' +
        '<a class="left carousel-control" href="#{elementId}" role="button" data-slide="prev">' +
          '<span class="{previousIcon}" aria-hidden="true"></span>' +
          '<span class="sr-only">{previousText}</span>' +
        '</a>' +
        '<a class="right carousel-control" href="#{elementId}" role="button" data-slide="next">' +
          '<span class="{nextIcon}" aria-hidden="true"></span>' +
          '<span class="sr-only">{nextText}</span>' +
        '</a>',
    },

    init: function () {
      // Check if element has ID
      // case not, throw an exception for the user
      if(!this.$element.attr('id')){
        throw 'You must provide an id for the Bootstrap Carousel element.';
      }

      this.$element.addClass('slide carousel');

      this.load();
    },

    initPlugin: function() {
      this.$element.carousel({
        interval: this.options.interval,
        pause: this.options.pause,
        wrap: this.options.wrap,
        keyboyard: this.options.keyboard
      });
    },

    addSlide: function(itemImg, itemTitle, itemContent) {
      var newSlide = this.template.slide
        .replace(/{itemImg}/, itemImg)
        .replace(/{itemTitle}/, itemTitle)
        .replace(/{itemContent}/, itemContent);
      this.$element.append(newSlide);
      this.load();
    },

    load: function() {
      this.$element.find('.carousel-inner, .carousel-indicators, .carousel-control').remove();
      this.$slides = this.$element.find('> img');
      this.$slides.hide();

      // workaround to remove carousel data for reinitiation
      this.$element.carousel('pause');
      this.$element.removeData('bs.carousel');

      this.$element.append(this.createCarousel());
      this.initPlugin();
    },

    createCarousel: function() {
      var template = '';

      // create slides
      template += this.createSlideDeck();

      // create indicators
      if(this.options.indicators) {
        template += this.createIndicators();
      }

      // create controls
      if(this.options.controls) {
        template += this.createControls();
      }

      return template
    },

    createIndicators: function() {
      var indicatorTemplate = '',
          slide,
          elementId = this.$element.attr('id');

      for (var i = 0; i < this.$slides.length; i++) {
        slide = this.$slides.get(i);

        indicatorTemplate += this.template.carouselIndicatorItem
          .replace(/{elementId}/, elementId)
          .replace(/{slideNumber}/, i)
          .replace(/{activeClass}/, i == 0 ? 'class="active"' : '');
      }

      return this.template.carouselIndicator.replace(/{indicators}/, indicatorTemplate);
    },

    createControls: function() {
      var elementId = this.$element.attr('id');

      return this.template.carouselControls
        .replace(/{elementId}/g, elementId)
        .replace(/{previousIcon}/, this.options.previousIcon)
        .replace(/{previousText}/, this.options.previousText)
        .replace(/{nextIcon}/, this.options.nextIcon)
        .replace(/{nextText}/, this.options.nextText);
    },

    createSlideDeck: function() {
      var slideTemplate = '',
          slide;

      for (var i = 0; i < this.$slides.length; i++) {
        slide = this.$slides.get(i);

        slideTemplate += this.createSlide(
          i == 0 ? 'active' : '',
          slide.src,
          slide.dataset.title,
          slide.dataset.content
        );
      };

      return this.template.carouselInner.replace(/{innerContent}/, slideTemplate);
    },

    createSlide: function(active, itemImg, itemTitle, itemContent) {
      return this.template.carouselItem
          .replace(/{activeClass}/, active)
          .replace(/{itemImg}/, itemImg)
          .replace(/{itemTitle}/, itemTitle || this.options.defaultTitle)
          .replace(/{itemContent}/, itemContent || this.options.defaultContent);
    }

  };

  // BOOTSTRAP CAROUSEL PLUGIN DEFINITION
  // =======================
  function Plugin(option) {

    var args = arguments;
    [].shift.apply(args);

    return this.each(function () {
      var $this = $(this),
          data  = $this.data('bootstrap-carousel'),
          options = $.extend({}, BootstrapCarousel.DEFAULTS, $this.data(), typeof option == 'object' && option),
          value;

      if (!data) {
        $this.data('bootstrap-carousel', (data = new BootstrapCarousel(this, options)));
      }

      if (typeof option == 'string') {
        if (data[option] instanceof Function) {
          value = data[option].apply(data, args);
        } else {
          value = data.options[option];
        }
      }
    })
  }

  var old = $.fn.bCarousel;
  $.fn.bCarousel = Plugin;
  $.fn.bCarousel.Constructor = BootstrapCarousel;


  // BOOTSTRAP CAROUSEL NO CONFLICT
  // =================
  $.fn.bCarousel.noConflict = function () {
    $.fn.bCarousel = old;
    return this;
  }


  // BOOTSTRAP CAROUSEL CLASS LOAD
  // ==============
  $(window).on('load', function () {
    $('.bootstrap-carousel').each(function () {
      var $carousel = $(this);
      Plugin.call($carousel, $carousel.data());
    })
  })

}(jQuery);
