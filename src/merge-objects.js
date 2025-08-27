/**
 * Merges multiple objects into one, with an option for deep merging.
 *
 * Accepts either:
 *  - mergeObjects(true, obj1, obj2, ...)  // deep merge
 *  - mergeObjects(obj1, obj2, ...)        // shallow merge
 *
 * @param {...(boolean|Object)} args Boolean deep flag optionally first, then source objects.
 * @returns {Object} New merged object.
 * @throws {TypeError} If any provided source (after optional boolean) is not an object.
 * @see https://gomakethings.com/merging-objects-with-vanilla-javascript/#adding-a-deep-merge
 */
export default function mergeObjects(...args) {
    // Determine whether caller passed (deep, ...objects) or just (...objects)
    let deep = false;
    let objects = args;

    if (typeof args[0] === 'boolean') {
        deep = args[0];
        objects = args.slice(1);
    }

    const extended = {};

    // Validate
    for (const obj of objects) {
        if (typeof obj !== 'object' || obj === null) {
            throw new TypeError('All arguments after the deep parameter must be objects.');
        }
    }

    const merge = (obj) => {
        for (const prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                if (deep && typeof obj[prop] === 'object' && obj[prop] !== null) {
                    extended[prop] = mergeObjects(true, extended[prop] || {}, obj[prop]);
                } else {
                    extended[prop] = obj[prop];
                }
            }
        }
    };

    for (const obj of objects) {
        merge(obj);
    }

    return extended;
}
