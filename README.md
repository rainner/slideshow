[twitter]: http://twitter.com/raintek_
[demo]: https://rainner.github.io/slideshow/
[mit]: http://www.opensource.org/licenses/mit-license.php

# Slideshow

![Slideshow](https://raw.githubusercontent.com/rainner/slideshow/master/thumb.jpg)

A simple slideshow JS class for controlling a list of slides by giving you the basic back/next/select/swipe controls to toggle the active slide, leaving the animation part up to you that can be added using CSS animatons to control how each slide enters and leaves.

[Check out the demo][demo]

### Install

```bash
npm install rainner/slideshow
```

### Usage

This is the HTML markup for a slideshow with 3 slides. It's up to you what goes inside each slide. The control elements `slideshow-back` `slideshow-next` `slideshow-nav` are optional and are used to add control buttons for changing slides.

```html
<div class="slideshow-wrap" style="display: none">
  <div class="slideshow-back"></div>
  <div class="slideshow-next"></div>
  <div class="slideshow-nav"></div>
  <div class="slideshow-list">
    <div class="slideshow-item">...</div>
    <div class="slideshow-item">...</div>
    <div class="slideshow-item">...</div>
  </div>
</div>
```

Once your slideshow markup is defined, it needs to be initialized using Javascript. Here both the sass file and JS file for the slideshow are imported into a project using Webpack to be compiled, something like this...

```js
import '~slideshow/src/slideshow.scss';
import Slideshow from 'slideshow';

let elms = document.querySelectorAll( '.slideshow-wrap' );
let options = {};

for ( let i = 0; i < elms.length; ++i ) {
  new Slideshow( elms[i], options );
}
```

### Options

Default options for each slideshow.

```js
{
  // css class prefix for inner elements
  prefixClass: 'slideshow',
  // class for active slide and controls
  activeClass: 'slide-active',
  // class for slide going next
  nextClass: 'slide-next',
  // class for slide going back
  backClass: 'slide-back',
  // auto skip to next slide
  autoplay: true,
  // loop around when skipping
  loop: true,
  // how long to wait
  delay: 10000,
}
```

### Author

Rainner Lins: [@raintek_][twitter]

### License

Licensed under [MIT][mit].



