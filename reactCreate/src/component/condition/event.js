export default {
    dom() {
        console.log("dom")
    },
    // 
    weather() {
        console.log("weather")
    },
    fn() {
        this.setState({
            state: !this.state.state
        })
    }
}