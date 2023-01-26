import axios from 'axios';
import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import './pagestyle.css';


const Home = () => {

    const [productFrom, setProductFrom] = useState([{ name: '', catagory: [''] }]);

    function addFormCntrol() {
        setProductFrom(state => {
            return [...state, { name: '', catagory: [''] }]
        })
    }

    function AddCatFn(e, item, i) {
        e.preventDefault()
        setProductFrom(state => {
            let cat = state[i].catagory
            cat.push('')
            state[i].catagory = cat
            console.log(state)
            return [...state]
        })
    }
    function deleteCatFn(e, i, index) {
        console.log(index)
        e.preventDefault()
        setProductFrom(state => {
            let cat = state[i].catagory
            cat.splice(index, 1)
            state[i].catagory = cat
            return [...state]
        })
    }

    function handleChangeInputName(index, event) {
        const value = [...productFrom]
        value[index].name = event.target.value
        setProductFrom(value)
    }
    function handleChangeInputCat(index , i, event) {
        const value = [...productFrom]
        value[index].catagory[i] = event.target.value
        setProductFrom(value)
    }

    function onSubmit(){

    }
    return (
        <div className='page_container'>
            This is home page...
<br />
<br />
            {JSON.stringify(productFrom)}

            <form action="">
                {
                    productFrom &&
                    productFrom.map((item, index) => {
                        return (
                            <div key={index}>
                                <input className='nameFormControl' type="text" placeholder='name' onChange={event => handleChangeInputName(index, event)} />
                                {item.catagory.map((c, i) => {
                                    return <div key={i} className='catField'><input className='catFormControl' value={c} type="text" placeholder='Cat' onChange={event => handleChangeInputCat(index,i, event)} />
                                        <button onClick={(e) => { deleteCatFn(e, index, i) }} className='btn'>Del</button></div>
                                })
                                }
                                <button className='btn' onClick={(e) => { AddCatFn(e, item, index) }}>Add Cat</button>
                            </div>
                        )
                    })
                }
            </form>
            <button className='btn' onClick={addFormCntrol}>Add More Product</button>
        </div>
    );
}

export default Home;
