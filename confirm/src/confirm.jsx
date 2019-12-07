// import { resolve } from "dns"
// import { reject } from "q"
// import React,{Component} from 'react'
import modal from './modal/modal'

export const  firm = (val)=>{
    //  console.log(val)
    return new Promise((resolve,reject) => {
        // modal.show(val)
        // if(val) {
        //     resolve(val)
        // }else {
        //     reject()
        // }
        modal.open(val,(val)=>{
            resolve(val)
        },()=>{
            console.log('oooo')
            reject()
        })
    }).then(response => {
        return response
    }).catch(async err =>{
        return err
        console.log(err)
    })
}