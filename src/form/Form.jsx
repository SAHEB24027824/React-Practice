import { useReducer, useState } from 'react';
import './form.css';


const ACTION = {
    ADD: 'ADD',
    DELETE: 'DELETE',
    SET_STORE_VALUE:'SET_STORE_VALUE',
    SET_PRODUCT_NAME:"SET_PRODUCT_NAME"
}

function reducer(state, action) {

    switch (action.type) {
        case ACTION.ADD:
            return {...state,stores:[...state.stores,'']}

        case ACTION.DELETE:
            state.stores.splice(action.payload.index,1)
            return {...state};
        case ACTION.SET_STORE_VALUE:
             state.stores[action.payload.index]=action.payload.value;
             return {...state};
        case ACTION.SET_PRODUCT_NAME:
            state.product=action.payload.value;
            return {...state}     
        default:
            return state;
    }

}

function Form() {

    const [formData, setFormData] = useReducer(reducer, { product: '', stores: [''] })


    function submitFormFn(e) {
        // e.preventDefault()
        // console.log(formData)
    }
    function addStoreFn(e) {
        e.preventDefault()
        setFormData({ type: ACTION.ADD })
    }
    function deleteFn(e, index) {
        e.preventDefault()
         if (formData.stores.length < 2) return false;
         setFormData({type:ACTION.DELETE,payload:{index:index}})
    }

    function setStoreValue(index, event) {
        setFormData({type:ACTION.SET_STORE_VALUE,payload:{index:index,value:event.target.value}})
    }


    function setProductNameFn(e) {
        setFormData({type:ACTION.SET_PRODUCT_NAME,payload:{value:e.target.value}})
    }


    return (
        <>
            <form className='form'>
                <h2 className='form_title'>Product Form</h2>
                <input type="text" placeholder='Product Name' className='inp' onChange={setProductNameFn} />
                <div className='available_store'>
                    <h4 className="store_container_title">Add Stores</h4>
                    {formData.stores.map((store, index) => {
                        return (
                            <div key={index}>
                                <input type="text" placeholder='Store' className='inp' value={store} onChange={event => setStoreValue(index, event)} />
                                <button onClick={(e) => { deleteFn(e, index) }} className="delete_btn">Delete</button>
                            </div>
                        )
                    })}
                    <button className='add_store_btn' onClick={addStoreFn}>Add Store</button>
                </div>

                <button type='submit' className='submit_btn' onClick={submitFormFn}>Submit</button>
            </form>

            <div className="from_result">{JSON.stringify(formData)}</div>
        </>
    )
}

export default Form;