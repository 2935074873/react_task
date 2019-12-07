import React,{Component,useState} from 'react'
import PropTypes from 'prop-types'
import InputNumber from './inputNumber'
function App() {
    const [value,setValue] = useState('aaa')
    return (
        <div>
            <InputNumber value={value} onchange={e=>{
                setValue(e.target.value)
            }}></InputNumber>
            <InputNumber defaultValue={value} onchange={e=>{}}></InputNumber>
        </div>
    )
}
export default App;