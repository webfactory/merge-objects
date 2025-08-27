import mergeObjects from '../src/merge-objects'; // Adjust the import path accordingly

describe('mergeObjects', () => {
    test('should perform a shallow merge', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };
        const result = mergeObjects(false, obj1, obj2);
        expect(result).toEqual({ a: 1, b: 3, c: 4 });
    });

    test('should perform a deep merge', () => {
        const obj1 = { a: 1, b: { x: 10, y: 20 } };
        const obj2 = { b: { y: 30, z: 40 }, c: 4 };
        const result = mergeObjects(true, obj1, obj2);
        expect(result).toEqual({ a: 1, b: { x: 10, y: 30, z: 40 }, c: 4 });
    });

    test('should perform a shallow merge when no deep arg is passed', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };
        const result = mergeObjects(obj1, obj2); // No deep argument passed
        expect(result).toEqual({ a: 1, b: 3, c: 4 });
    });

    test('should throw an error if a non-object is passed', () => {
        expect(() => mergeObjects(true, { a: 1 }, 'not an object')).toThrow(TypeError);
        expect(() => mergeObjects(false, { a: 1 }, null)).toThrow(TypeError);
        expect(() => mergeObjects(false, { a: 1 }, 42)).toThrow(TypeError);
    });

    test('should handle more than two objects', () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const obj3 = { c: 3 };
        const result = mergeObjects(false, obj1, obj2, obj3);
        expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });

    test('should handle empty objects', () => {
        const obj1 = {};
        const obj2 = {};
        const result = mergeObjects(false, obj1, obj2);
        expect(result).toEqual({});
    });

    test('should handle deep merge with empty objects', () => {
        const obj1 = { a: 1, b: {} };
        const obj2 = { b: { y: 30 }, c: 4 };
        const result = mergeObjects(true, obj1, obj2);
        expect(result).toEqual({ a: 1, b: { y: 30 }, c: 4 });
    });
});
