import React, { useState } from 'react'
import {useHistory} from "react-router-dom"

const Form = () => {
    const [category, setCategory] = useState("")
    const [id, setId] = useState("")
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/${category}/${id}`)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    Category: 
                    <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
                        <option hidden>Choose a category</option>
                        <option value="people">Person</option>
                        <option value="planets">Planet</option>
                    </select>
                    ID: 
                    <input type="text" name="id" value={id} onChange={e => setId(e.target.value)}/>
                    <button>Search</button>
                </p>
            </form>
        </div>
    )
}

export default Form