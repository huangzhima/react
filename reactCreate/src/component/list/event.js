export default {
    sortfn() {
        var arr = this.state.list.sort(() => {
            return Math.random() > 0.5 ? 1 : -1
        })
        this.setState({
            list: arr
        })
    }
}