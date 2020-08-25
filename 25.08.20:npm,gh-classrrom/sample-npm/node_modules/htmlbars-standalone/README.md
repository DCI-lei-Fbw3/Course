# htmlbars-standalone
This is a wrapper for standalone usage of tildeio's [HTMLBars package](https://github.com/tildeio/htmlbars). I made this 
because there was no way to include and use HTMLBars in a project easily. All I did was:

- `npm run-script build` the original project at **version 0.14.24**
- bundle package using `webpack`
- make it avaiable through `npm` and `bower`

**Note:** I have no connection to the original HTMLBars project, and have no in-depth knowledge of their code. Since there 
is very little documentation on the HTMLBars code I just tweaked until I had something that worked. Feel free to use it, 
and be sure to let me know if you see a place for improvement. 

I will propbably update this package as I go along in the development of my 
own [little webapp framework](https://github.com/rseyferth/chicken).


## Installation

### Bower
Install the library by using bower:

```
bower install htmlbars-standalone
```

Include the `build/htmlbars.js` into your page:

```html
<script src="../bower_components/htmlbars-standalone/build/htmlbars.js" charset="utf-8"></script>
```

You should now have access to the global `HTMLBars` object in your javascript.



### NPM

Install the package using npm:

```
npm install htmlbars-standalone
```

Import it into your script:

```javascript
import HTMLBars from 'htmlbars-standalone';
```


## Usage

The package makes avaiable the following objects:

```yaml
- HTMLBars:
  - DOMHelper: The DOMHelper class
  - Compiler:
    - compile: The HTMLBars compile method
    - template: The HTMLBars template method
  - Runtime:
    - Hooks:
      - Default: The default hooks from HTMLBars that you can extend
      - Helpers:
        - handleRedirect: A helper method used in hooks
```

As you can see this is **far from complete**; I only added what I needed. It should be enough to get a 
working HTMLBars template though.

## Example

```javascript

var env = {
	dom: new HTMLBars.DOMHelper(),
	hooks: _.defaults({

	}, HTMLBars.Runtime.Hooks.Default),
	helpers: {},
	partials: {},
	useFragmentCache: true
};

var template = HTMLBars.Compiler.compile('<h1>Hello, {{ name }}</h1>');
var result = template.render({
	name: 'World'
}, env);

var documentFragment = result.fragment;
$('body').html(documentFragment);

```

See the [Renderer class](https://github.com/rseyferth/chicken/blob/master/src/Dom/Renderer.js) for possible
pointers. (Again, work in progress)
