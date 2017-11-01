export let event = {
    obj: {},
    $on(name, fn) {
        if (this.obj[name] === undefined) {
            this.obj[name] = []
        }
        this.obj[name].push(fn)
    },
    $emit() {
        let name = arguments[0]
        let data = Array.prototype.slice.call(arguments, 1)
        this.obj[name].forEach(function(i) {
            i(...data)
        }, this);
    },
    $destroy(name) {
        delete this.obj[name]
    }
}

// 数据仓库
let state = {
    num: 1
}



// export let state = Object.assign({}, event, data)
let keys = Object.keys(state)
keys.forEach(function(i) {
    Object.defineProperty(state, i, {
        writable: false
    })
})


export const getdata = function() {
    var obj = {}
    for (var key in state) {
        obj[key] = state[key]
    }

    return obj
}

console.log(Object.getOwnPropertyDescriptor(getdata(), "num"))

// 逻辑处理层
export let dispatch = (obj) => {
    const { type } = obj

    switch (type) {
        case "addnum":
            {
                const num = state.num + 1
                Object.defineProperty(state, "num", { value: num })
                event.$emit("change")
            }
            break;
    }
}

// 动作分发
export let actions = {
    add_c() {

        dispatch({
            type: "addnum"
        })
    }

}