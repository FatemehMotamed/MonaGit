import React, { useState } from 'react'

function Form() {
    const data = {
        "username": "",
        "password": "",
        "role": "",
        "gender": "",
        "remember": true,
    }

    const [form, setForm] = useState(data)

    const submitForm = (event) => {
        console.log(form)
        event.preventDefault()

    }
    
    const ChangeHandler = (event) => {
        const { name, value, checked } = event.target

        if (name == "remember") {
            setForm({ ...form, [name]: checked })
        }
        else {
            setForm({ ...form, [name]: value })
        }
    }

    return (
        <>
            <form onSubmit={submitForm} >
                <input type="text" name="username" onChange={ChangeHandler} />
                <input type="password" name="password" onChange={ChangeHandler} />
                <select name="role" onChange={ChangeHandler}>
                    <option value="admin" > Admin</option>
                    <option value="superuser" > Super User</option>
                </select>

                <input type="radio" name="gender" id="male" value="male" onChange={ChangeHandler} />male
                <input type="radio" name="gender" id="female" value="female" onChange={ChangeHandler} />female
                <input type="radio" name="gender" id="other" value="other" onChange={ChangeHandler} />other &nbsp;&nbsp;
                <label htmlFor="remember" >remember</label>
                <input type="checkbox" name="remember" id='id_remember' value={form.remember} checked={form.remember} onChange={ChangeHandler} />

                <button>send</button>
            </form>
        </>
    )
}

export default Form