import { useState } from 'react'

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        content: ''
    })
    

    //Assume the user will send a message
    const [hasContent, setHasContent] = useState(true);
    const [hasEmail, setHasEmail] = useState(true);
    const [hasName, setHasName] = useState(true);
    const [submitAttempted, setSubmitAttempted] = useState(false)


    function handleChange(e) {
        setForm((prevForm) => {
            return {
                ...prevForm,
                [e.target.name]: e.target.value
            }
        })
        console.log(form);
    }


    function handleSubmit(e) {
        e.preventDefault();
        setSubmitAttempted(true)
        //Check if there is content for the message
        if (form.content === '') {
            setHasContent(false);
        } else{
            setHasContent(true)
        }
        //Check if theree is an email that matches the validation
        if (!form.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) || !form.email){
            setHasEmail(false);
        } else{
            setHasEmail(true)
        }
        //Check if there is a name
        if (!form.name){
            setHasName(false);
        } else{
            setHasName(true)
        }
        //If it passes all of the above checks we can submit and reset the form
        if(submitAttempted && hasEmail && hasContent && hasName) {
            console.log('everything seems good')
            setHasName(true)
            setHasContent(true);
            setHasEmail(true);
            setForm({
                name: '',
                email: '',
                content: ''
            })
        }
        //Otherwise we end the function
        return;
    }

    const handleBlur = (e) => {
        //Check if theree is an email that matches the validation
        if (e.target.name === 'email' && (!form.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) || !form.email)){
            setHasEmail(false);
        } else{
            setHasEmail(true)
        }
        //Check if there is a name
        if (e.target.name === 'name' &&!form.name){
            setHasName(false);
        } else{
            setHasName(true)
        }

        //Check if there is a name
        if (e.target.name === 'content' && !form.content){
            setHasContent(false);
        } else{
            setHasContent(true)
        }
    }

    return (
        <section className="container my-5 mx-6">
            <form onSubmit={handleSubmit} >
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text"  name="name" class="form-control"  onChange={handleChange} onBlur={handleBlur} value={form.name} id="name" />
                </div>
                {!hasName ? <h2 className="h3 text-danger">Please enter a name</h2> : ''}
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="text" name="email" class="form-control"  onChange={handleChange} onBlur={handleBlur} value={form.email} id="email" />
                </div>
                {!hasEmail ? <h2 className="h3 text-danger">Please enter a valid email</h2> : ''}
                <div class="mb-3">
                    <label for="content">Body</label>
                    <textarea class="form-control" name="content" id="content"  onChange={handleChange} onBlur={handleBlur} value={form.content} rows="3"></textarea>
                </div>
                {!hasContent ? <h2 className="h3 text-danger">Please Include a Message</h2> : ''}

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </section>
    )
}