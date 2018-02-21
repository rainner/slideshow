/**
 * App js entry file.
 */
import './app.scss';
import './slideshow.scss';
import Slideshow from './slideshow';

let elms = document.querySelectorAll( '.slideshow-wrap' );
let options = {};

for ( let i = 0; i < elms.length; ++i ) {
  new Slideshow( elms[i], options );
}
