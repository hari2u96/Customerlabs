import React, { useState } from 'react'
import "./Popup.css"

function Schema({setOpenPop}) {

    function handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setSchemaList({
            //TODO: retain other values, need to use ...rest operator
            [name]: value
        });
    }

    function handleSubmit() {
        //TODO: Add the current state to a Segment List
    }

    const [schemaList, setSchemaList] = useState({
        first_name: '',
        second_name: '',
        gender: '',
        age: '',
        account_name: '',
        city: '',
        state: ''
    });
    return (

        <form onSubmit={handleSubmit}>

            <label>
                First Name:
                <input
                    name="first_name"
                    type="textbox"
                    value={schemaList.first_name}
                    onChange={handleInputChange} />
            </label>
            <br /><br />
            <label>
                Second Name:
                <input
                    name="second_name"
                    type="textbox"
                    value={schemaList.second_name}
                    onChange={handleInputChange} />
            </label>
            <br /> <br />
            <label>
                Gender:
                <input
                    name="gender"
                    type="textbox"
                    value={schemaList.gender}
                    onChange={handleInputChange} />
            </label>
            <br /><br />
            <label>
                Age:
                <input
                    name="age"
                    type="textbox"
                    value={schemaList.age}
                    onChange={handleInputChange} />
            </label>
            <br /><br />
            <label>
                Account Name:
                <input
                    name="account_name"
                    type="textbox"
                    value={schemaList.account_name}
                    onChange={handleInputChange} />
            </label>
            <br /><br />
            <label>
                City:
                <input
                    name="city"
                    type="textbox"
                    value={schemaList.city}
                    onChange={handleInputChange} />
            </label>
            <br /><br />
            <label>
                State:
                <input
                    name="state"
                    type="textbox"
                    value={schemaList.state}
                    onChange={handleInputChange} />
            </label>
            <br /><br />
            <a href='/'  onClick={()=>{setOpenPop(true)}}>
                + Add New Schema
            </a>
            <br /><br />
            <input type="submit" value="Submit" title="Save the Segment" />
            {/* <input type="button" onClick={() => { setPopOpen(false) }} className='cancel' title="Cancel" /> */}

        </form>
    )
}
export default Schema