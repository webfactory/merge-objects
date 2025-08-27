# mergeObjects Utility

The `mergeObjects` function is a utility for merging multiple objects into a single object, with an option to perform a deep merge. This function is particularly useful for combining configuration settings, state management, or any scenario where you need to consolidate multiple objects while preserving their properties.

## Installation

```
npm install @webfactoryde/merge-objects
```

## Usage

Import the `merge-objects` function in your module(s) and pass any number of objects:

```javascript
// your module
import debounce from '@webfactoryde/merge-objects';

// Shallow merge:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const result = mergeObjects(obj1, obj2);
console.log(result); // Output: { a: 1, b: 3, c: 4 }

// Deep merge
const obj1 = { a: 1, b: { x: 10, y: 20 } };
const obj2 = { b: { y: 30, z: 40 }, c: 4 };
const result = mergeObjects(true, obj1, obj2);
console.log(result); // Output: { a: 1, b: { x: 10, y: 30, z: 40 }, c: 4 }
```
