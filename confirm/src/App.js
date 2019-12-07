import React,{Component} from 'react'
class App extends Component {
    render() {
        return (
            <div>445</div>
        )
    }
    async  componentDidMount() {
        let res = await React.firm('确定删除吗')
        console.log(res)
    if(res) {
        console.log("是")
    } else {
        console.log("否")
    }
    }
}
export default App;