import React,{Component,useState} from 'react'
import PropTypes from 'prop-types'
class InputNumber extends Component {
    constructor(props){
		super(props)
		this.state = {
			focus: false,
			innerValue: ''
		}
    }
    get isControl(){
		return 'value' in this.props
	}

	get value() {
		if(this.isControl){
			return this.props.value
		} else {
			return this.state.innerValue
		}
    }
    render(){
        const {
			onChange,
		} = this.props
        return (
            <div>
                <input
					value={this.value}
					onChange={(e) => {
						if(!this.isControl){
							this.setState({
								innerValue: e.target.value
							})
						}
						this.props.onchange(e)
					}}
				/>
            </div>
        )
    }
    

    componentDidMount() {
		this.setState({
			innerValue: this.props.defaultValue
		})
	}
}
export default InputNumber;