"use strict";
var Catalog = (function () {
    function Catalog(name, year, special, image_src) {
        this.name = name;
        this.year = year;
        this.special = special;
        this.image_src = image_src;
    }
    return Catalog;
}());
exports.Catalog = Catalog;
