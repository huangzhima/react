export default {
    arrFn: {},
    $emit() {
        let name = arguments[0]
        if (arguments.length == 0) {
            return false
        }
        if (this.arrFn[name] != undefined && this.arrFn[name].length > 0) {
            let data = [].concat(Array.prototype.slice.call(arguments, 1))
            this.arrFn[name].forEach(function(i) {
                i(...data)
            }, this);
        }
    },
    $on(name, fn) {
        if (this.arrFn[name] === undefined) {
            this.arrFn[name] = []
        }
        this.arrFn[name].push(fn)
    }
}