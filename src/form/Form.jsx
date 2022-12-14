import { useReducer, useState } from 'react';
import './form.css';

function Form() {
    const [formData, setFormData] = useState({ product: '', stores: [''] })


    function submitFormFn(e) {
        e.preventDefault()
        console.log(formData)
    }
    function addStoreFn(e) {
        e.preventDefault();
        if (formData.stores.length >= 3) return false;
        setFormData((previousState) => {
            return { product: previousState.product, stores: [...previousState.stores, ''] }
        })
        console.log(formData)
    }

    function setStoreValue(index, event) {
        let stores = [...formData.stores];
        stores[index] = event.target.value;
        setFormData({ ...formData, stores })
    }


    function setProductNameFn(e) {
        setFormData({ ...formData, product: e.target.value })
    }

    function deleteFn(e, index) {
        console.log(index)
        e.preventDefault()
        if (formData.stores.length < 2) return false;
        formData.stores.splice(index, 1)
        console.log(formData)
        setFormData({ ...formData })

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