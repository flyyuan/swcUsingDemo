function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var IncStore = /*#__PURE__*/ function() {
    "use strict";
    function IncStore1() {
        _classCallCheck(this, IncStore1);
        this.num = 0;
    }
    _createClass(IncStore1, [
        {
            key: "inc",
            value: function inc() {
                this.num += 1;
                this.unInitValue += 1;
            }
        }
    ]);
    return IncStore1;
}();
var incStore = new IncStore();
window.aaa = incStore;
export { incStore as default };
