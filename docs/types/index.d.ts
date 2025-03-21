/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Complex128Array } from '@stdlib/types/array';
import { Complex128 } from '@stdlib/types/complex';

/**
* Interface describing `zscal`.
*/
interface Routine {
	/**
	* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @returns input array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array-complex128' );
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var alpha = new Complex128( 2.0, 2.0 );
	*
	* zscal( 3, alpha, x, 1 );
	* // x => <Complex128Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
	*/
	( N: number, alpha: Complex128, x: Complex128Array, strideX: number ): Complex128Array;

	/**
	* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @returns input array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array-complex128' );
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var alpha = new Complex128( 2.0, 2.0 );
	*
	* zscal.ndarray( 3, alpha, x, 1, 0 );
	* // x => <Complex128Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
	*/
	ndarray( N: number, alpha: Complex128, x: Complex128Array, strideX: number, offsetX: number ): Complex128Array;
}

/**
* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant.
*
* @param N - number of indexed elements
* @param alpha - scalar constant
* @param x - input array
* @param strideX - `x` stride length
* @returns input array
*
* @example
* var Complex128Array = require( '@stdlib/array-complex128' );
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var alpha = new Complex128( 2.0, 2.0 );
*
* zscal( 3, alpha, x, 1 );
* // x => <Complex128Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array-complex128' );
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var alpha = new Complex128( 2.0, 2.0 );
*
* zscal.ndarray( 2, alpha, x, 1, 1 );
* // x => <Complex128Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
*/
declare var zscal: Routine;


// EXPORTS //

export = zscal;
