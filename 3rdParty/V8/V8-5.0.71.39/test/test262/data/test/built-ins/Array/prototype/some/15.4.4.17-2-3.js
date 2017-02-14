// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-2-3
description: >
    Array.prototype.some - 'length' is an own data property that
    overrides an inherited data property on an Array-like object
---*/

        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        var proto = { length: 3 };

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        child.length = 2;
        child[0] = 9;
        child[1] = 11;
        child[2] = 12;

assert(Array.prototype.some.call(child, callbackfn1), 'Array.prototype.some.call(child, callbackfn1) !== true');
assert.sameValue(Array.prototype.some.call(child, callbackfn2), false, 'Array.prototype.some.call(child, callbackfn2)');