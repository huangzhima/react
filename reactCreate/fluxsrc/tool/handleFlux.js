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
export let state = {
    num: 1
}


// 逻辑处理层
export let dispatch = (obj) => {
    const { type } = obj

    switch (type) {
        case "addnum":
            {
                state.num++
                event.$emit("change")
            }
            break;
    }
}

// 动作分发
export let actions = {
    add_c() {

        const obj = {
            type: "addnum"
        }
        dispatch(obj)
    }

}