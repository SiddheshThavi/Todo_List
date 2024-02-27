import React, { useState } from 'react'

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [decs, setdecs] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !decs) {
            alert("Title or Decs cannot be blank")

        }
        else {
            props.addTodo(title, decs);

            setTitle("");
            setdecs("");
        }
    }
    return (
        <div className='container my-3'>
            <h3 className='text-center'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"> Todo title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="decs" className="form-label ">Todo Description</label>
                    <input type="text" value={decs} onChange={(e) => setdecs(e.target.value)} className="form-control" id="decs" />
                </div>
                <button type="submit" className="btn btn-sm btn-outline-secondary">Add Todo </button>
            </form>
        </div>
    )
}
