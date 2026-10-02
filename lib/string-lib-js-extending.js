// Extends the String prototype with an ordinalize method.
(function () {
    if (!String.prototype.ordinalize) {
        String.prototype.ordinalize = function () {
            const suffixes = new Map([
                ["1", "st"],
                ["2", "nd"],
                ["3", "rd"]
            ]);
            const o = '' + this;
            if (!o || !parseInt(o, 10)) {
                return '';
            }
            const last = o.at(-1) ?? '';
            return o + (suffixes.get(last) ?? 'th');
        };
    }
}());