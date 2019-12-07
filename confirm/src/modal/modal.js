import ReactDOM from "react-dom";
import React from "react";
import ProTypes from 'prop-types'
import { directive } from "@babel/types";

let showfunc = null,hidefunc = null;
class Modal extends React.Component{
	static propTypes = {
        name:ProTypes.string
	}
	static defaultProps = {
        name:'aaa'
    }
	render() {
		const {name} = this.props
		return (
            <div>
                {name}
				<button onClick={e=>{
					showfunc('成功')
					modal.hide()
				}}>确定</button>
				<button onClick={e=>{
					hidefunc()
					modal.hide()
				}}>取消</button>
            </div>
		);
	}
	
}
let node = null

const modal = {
	show(val) {
		node = document.createElement('div')
		document.body.appendChild(node)
		ReactDOM.render(<Modal name={val} />, node)
	},
	hide() {
		if(node) {
			ReactDOM.unmountComponentAtNode(node)
			document.body.removeChild(node)
		}
	},
	open(val,confirm,cancel) {
		modal.show(val)
		showfunc = confirm
		hidefunc = cancel
	}
}

export default modal;
