[![npm](https://img.shields.io/npm/v/opusonline-uuid.js.svg?style=flat)](https://npmjs.org/package/opusonline-uuid.js)
[![downloads](https://img.shields.io/npm/dm/opusonline-uuid.js.svg?style=flat)](https://npmjs.org/package/opusonline-uuid.js)

uuid.js
=======

Javascript UUID version 4 generator and parser - string and binary

[Wikipedia UUID](http://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_.28random.29)

* runs in browsers and node.js 
* creates and parses uuids as string or binary

# Install

- Install with [yarn](https://yarnpkg.com/): `yarn add opusonline-uuid.js`.
- Install with [npm](https://www.npmjs.org): `npm install opusonline-uuid.js`.

# Usage

Return a valid v4 UUID.

```javascript
let id = uuid();
// e.g "6ee65cf0-4fdc-4d33-b78d-d09e1294d80f"
```

## Methods

### create

Same as uuid().

```javascript
let id = uuid.create();
```

### createBinary

Return a v4 UUID as Uint8Array, Buffer or Array.

```javascript
let bytes = uuid.createBinary();
// e.g. [110, 230, 92, 240, 79, 220, 77, 51, 183, 141, 208, 158, 18, 148, 216, 15]
```

### parse

Parses a v4 UUID from string to binary

```javascript
let bytes = uuid.parse('6ee65cf0-4fdc-4d33-b78d-d09e1294d80f');
// gives [110, 230, 92, 240, 79, 220, 77, 51, 183, 141, 208, 158, 18, 148, 216, 15]
```

### parseBinary

Parses a v4 UUID from binary to string

```javascript
let bytes = new Uint8Array([110, 230, 92, 240, 79, 220, 77, 51, 183, 141, 208, 158, 18, 148, 216, 15]);
let id = uuid.parseBinary(bytes);
// gives "6ee65cf0-4fdc-4d33-b78d-d09e1294d80f"
```
