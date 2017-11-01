export default {
    type(event) {
        var obj = this.state[event.target.dataset.model]
            // 清楚提示信息
        let $p = event.target.parentNode.getElementsByTagName("p")[0]
        if ($p !== undefined) {
            event.target.parentNode.removeChild($p)
        }
        obj.val = ""
        this.setState({
            [obj.name]: obj
        })
        if (event.target.value !== "" && event.target.value !== undefined) {
            console.log(event.target.value)
            var state = obj.reg.test(event.target.value)
            console.log(state)
            if (state) {
                this.formHandle(event, obj)
            } else {
                let $p = document.createElement("p")
                $p.style.color = "red"
                $p.innerHTML = obj.msg
                event.target.parentNode.appendChild($p)
            }
        } else {

            let $p = document.createElement("p")
            $p.style.color = "red"
            $p.innerHTML = "请输入内容"
            event.target.parentNode.appendChild($p)

        }



    },
    formHandle(event, obj) {
        obj.val = event.target.value
        this.setState({
            [obj.name]: obj
        })
    },
    changeFn(event) {

        if (event.target.type === "checkbox") {
            var obj = this.state.love
            obj[event.target.name].checked = event.target.checked
            this.setState({
                love: obj
            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

    },
    submit() {
        console.log(this.state.select)
        console.log(this.state.ball)
        console.log(this.state.sing)
        var arr = []
        this.state.love.forEach(function(i) {
            if (i.checked) {
                arr.push(i.cnname)
            }
        }, this);
        console.log(arr)
        if (this.state.name.val && this.state.age.val) {
            console.log(this.state.select)
            alert("提交成功")
        } else {
            alert("请输入内容")
        }
    }
}