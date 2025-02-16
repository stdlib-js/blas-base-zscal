<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-base-zscal
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var zscal = require( '@stdlib/blas-base-zscal' );
```

#### zscal( N, za, zx, strideX )

Scales values from `zx` by `za`.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var zx = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var za = new Complex128( 2.0, 0.0 );

zscal( 3, za, zx, 1 );
// zx => <Complex128Array>[ 2.0, 2.0, 2.0, 2.0, 2.0, 2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **za**: scalar [`Complex128`][@stdlib/complex/float64/ctor] constant.
-   **zx**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: index increment for `zx`.

The `N` and stride parameters determine how values from `zx` are scaled by `za`. For example, to scale every other value in `zx` by `za`,

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var za = new Complex128( 2.0, 0.0 );

zscal( 2, za, zx, 2 );
// zx => <Complex128Array>[ 2.0, 4.0, 3.0, 4.0, 10.0, 12.0, 7.0, 8.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

// Initial array:
var zx0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

// Define a scalar constant:
var za = new Complex128( 2.0, 2.0 );

// Create an offset view:
var zx1 = new Complex128Array( zx0.buffer, zx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Scales every other value from `zx1` by `za`...
zscal( 3, za, zx1, 1 );
// zx0 => <Complex128Array>[ 1.0, 2.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0 ]
```

#### zscal.ndarray( N, za, zx, strideX, offsetX )

Scales values from `zx` by `za` using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var za = new Complex128( 2.0, 2.0 );

zscal.ndarray( 3, za, zx, 1, 0 );
// zx => <Complex128Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `zx`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to scale every other value in the input strided array starting from the second element,

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var za = new Complex128( 2.0, 2.0 );

zscal.ndarray( 2, za, zx, 2, 1 );
// zx => <Complex128Array>[ 1.0, 2.0, -2.0, 14.0, 5.0, 6.0, -2.0, 30.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `strideX <= 0` , both functions return `zx` unchanged.
-   `zscal()` corresponds to the [BLAS][blas] level 1 function [`zscal`][zscal].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var zscal = require( '@stdlib/blas-base-zscal' );

function rand() {
    return new Complex128( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var zx = filledarrayBy( 10, 'complex128', rand );
console.log( zx.toString() );

var za = new Complex128( 2.0, 2.0 );
console.log( za.toString() );

// Scales elements from `zx` by `za`:
zscal( zx.length, za, zx, 1 );
console.log( zx.get( zx.length-1 ).toString() );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/base/zscal.h"
```

#### c_zscal( N, za, \*ZX, strideX )

Scales values from `ZX` by `za`.

```c
#include "stdlib/complex/float64/ctor.h"

double zx[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
const stdlib_complex128_t za = stdlib_complex128( 2.0, 2.0 );

c_zscal( 4, za, (void *)zx, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **za**: `[in] stdlib_complex128_t` scalar constant.
-   **ZX**: `[inout] void*` input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `ZX`.

```c
void c_zscal( const CBLAS_INT N, const stdlib_complex128_t za, void *ZX, const CBLAS_INT strideX );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/base/zscal.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array of interleaved real and imaginary components:
    double zx[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

    // Create a complex scalar:
    const stdlib_complex128_t ca = stdlib_complex128( 2.0, 2.0 );

    // Specify the number of elements:
    const int N = 4;

    // Specify stride length:
    const int strideX = 1;

    // Scale the elements of the array:
    c_zscal( N, za, (void *)zx, strideX );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "zx[ %i ] = %f + %fj\n", i, zx[ i*2 ], zx[ (i*2)+1 ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-zscal.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-zscal

[test-image]: https://github.com/stdlib-js/blas-base-zscal/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-zscal/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-zscal/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-zscal?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-zscal.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-zscal/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

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

[zscal]: https://netlib.org/lapack/explore-html-3.6.1/d2/df9/group__complex16__blas__level1_gaceea1208dcd46b6e5468fbfb53b9281b.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[@stdlib/complex/float64/ctor]: https://github.com/stdlib-js/complex-float64-ctor

</section>

<!-- /.links -->
