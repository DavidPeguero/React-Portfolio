import { useState } from 'react'

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        content : ''
    })

    function handleChange(e){
        setForm((prevForm)=> {
            return { 
                ...prevForm,
                [e.target.name] : e.target.value
            }
        })
        console.log(form);
    }

    function doSomething(){
        console.log('Doing a thing')
    }

    function handleSubmit(e){
        e.preventDefault();
        doSomething();
        setForm({
            name : '',
            email : '',
            content : ''
        })
    }
    return (
        <div className="container my-5 mx-6">
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" name="name" class="form-control" onChange={handleChange} value={form.name} id="name" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name="email" class="form-control" onChange={handleChange} value={form.email} id="email" />
                </div>
                <div class="mb-3">
                    <label for="content">Body</label>
                    <textarea class="form-control" name="content" id="content" onChange={handleChange} value={form.content} rows="3"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}