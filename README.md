<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zscal

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant.



<section class="usage">

## Usage

To use in Observable,

```javascript
zscal = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-zscal@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/blas-base-zscal/tags). For example,

```javascript
zscal = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-zscal@v0.1.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var zscal = require( 'path/to/vendor/umd/blas-base-zscal/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-zscal@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.zscal;
})();
</script>
```

#### zscal( N, alpha, x, strideX )

Scales values from `x` by `alpha`.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var x = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var alpha = new Complex128( 2.0, 0.0 );

zscal( 3, alpha, x, 1 );
// x => <Complex128Array>[ 2.0, 2.0, 2.0, 2.0, 2.0, 2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar [`Complex128`][@stdlib/complex/float64/ctor] constant.
-   **x**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: index increment for `x`.

The `N` and stride parameters determine how values from `x` are scaled by `alpha`. For example, to scale every other value in `x` by `alpha`,

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var alpha = new Complex128( 2.0, 0.0 );

zscal( 2, alpha, x, 2 );
// x => <Complex128Array>[ 2.0, 4.0, 3.0, 4.0, 10.0, 12.0, 7.0, 8.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

// Initial array:
var x0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

// Define a scalar constant:
var alpha = new Complex128( 2.0, 2.0 );

// Create an offset view:
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Scales every other value from `x1` by `alpha`...
zscal( 3, alpha, x1, 1 );
// x0 => <Complex128Array>[ 1.0, 2.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0 ]
```

#### zscal.ndarray( N, alpha, x, strideX, offsetX )

Scales values from `x` by `alpha` using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var alpha = new Complex128( 2.0, 2.0 );

zscal.ndarray( 3, alpha, x, 1, 0 );
// x => <Complex128Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to scale every other value in the input strided array starting from the second element,

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var alpha = new Complex128( 2.0, 2.0 );

zscal.ndarray( 2, alpha, x, 2, 1 );
// x => <Complex128Array>[ 1.0, 2.0, -2.0, 14.0, 5.0, 6.0, -2.0, 30.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `x` unchanged.
-   `zscal()` corresponds to the [BLAS][blas] level 1 function [`zscal`][zscal].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-zscal@umd/browser.js"></script>
<script type="text/javascript">
(function () {

function rand() {
    return new Complex128( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var x = filledarrayBy( 10, 'complex128', rand );
console.log( x.toString() );

var alpha = new Complex128( 2.0, 2.0 );
console.log( alpha.toString() );

// Scales elements from `x` by `alpha`:
zscal( x.length, alpha, x, 1 );
console.log( x.get( x.length-1 ).toString() );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-zscal.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-zscal

[test-image]: https://github.com/stdlib-js/blas-base-zscal/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/blas-base-zscal/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-zscal/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-zscal?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-zscal.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-zscal/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-zscal/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-zscal/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-zscal/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-zscal/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-zscal/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-zscal/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-zscal/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-zscal/main/LICENSE

[blas]: http://www.netlib.org/blas

[zscal]: https://www.netlib.org/lapack/explore-html/d2/de8/group__scal_gafac698034497c3148620e35c316d9ffb.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128/tree/umd

[@stdlib/complex/float64/ctor]: https://github.com/stdlib-js/complex-float64-ctor/tree/umd

</section>

<!-- /.links -->
