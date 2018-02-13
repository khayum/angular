'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionHas = function (a, b) {
    for (var i = 0, len = a.length; i < len; i++) {
        if (a[i] == b)
            return true;
    }
    return false;
};
exports.findParentBySelector = function (elm, selector) {
    var all = document.querySelectorAll(selector);
    var cur = elm.parentNode;
    while (cur && !this.collectionHas(all, cur)) {
        cur = cur.parentNode;
    }
    return cur;
};
exports.resetTopMenu = function () {
    var a = document.querySelectorAll('li.active-topmenuitem');
    for (var i = 0, len = a.length; i < len; i++) {
        a[i].classList.toggle('active-topmenuitem');
    }
};
var CommonModule = (function () {
    function CommonModule() {
    }
    return CommonModule;
}());
exports.CommonModule = CommonModule;
//# sourceMappingURL=app.global.js.map