var watchObj = {
    arrFn: {},
    on(name, fn) {
        if (this.arrFn[name] === undefined) {
            this.arrFn[name] = []
        }
        this.arrFn[name].push(fn)
    },
    emit() {
        let name, args;
        if (arguments.length == 0) {
            return false;
        }
        name = arguments[0]
        args = [].concat(Array.prototype.slice.call(arguments, 1));
        if (this.arrFn[name] !== undefined && this.arrFn[name].length > 0) {
            this.arrFn[name].forEach(function(i) {
                i(...args)
            }, this);
        }
    }
}
export default watchObj