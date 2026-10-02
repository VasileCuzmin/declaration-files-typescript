//cjs - stands for CommonJS Module - CommonJS is a module system used in Node.js for exporting and importing modules.
const suffixes = new Map([
    ["1", "st"],
    ["2", "nd"],
    ["3", "rd"]
]);

const stringLib = {
    version: "1.0.0",
    ordinalize: function (ordinal) {
        const o = '' + ordinal;

        if (!o || !parseInt(o, 10)) {
            return '';
        }

        const last = o.at(-1) ?? '';
        return o + (suffixes.get(last) ?? 'th');
    }
};
module.exports = stringLib;