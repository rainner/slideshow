[twitter]: http://twitter.com/raintek_
[demo]: https://rainner.github.io/slideshow/
[mit]: http://www.opensource.org/licenses/mit-license.php

# Scroller

A simple slideshow JS class for controlling a list of slides by giving you the basic back/next/select/swipe controls to toggle the active slide, and leaving the animation part up to you that can be added using CSS animatons to control how each slide enters and leaves.

[Check out the demo][demo]

### Install

```bash
npm install rainner/slideshow
```

### Usage

This is the HTML markup for a slideshow with 3 slides. It's up to you what goes inside each slide.
The control elements `slideshow-back` `slideshow-next` `slideshow-nav` are optional and are used to add control buttons for changing slides.

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

Once your slideshow markup is defined, they need to be initialized using the Javascript class like this...

```js
import Slideshow from 'slideshow';

let elms = document.querySelectorAll( '.slideshow-wrap' );

for ( let i = 0; i < elms.length; ++i ) {
  new Slideshow( elms[ i ] );
}
```



Import as a module and bundle using your preferred bundling method (Webpack, Gulp, etc)...

```js

```

### Author

Rainner Lins: [@raintek_][twitter]

### License

Licensed under [MIT][mit].

