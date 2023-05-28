import { useState } from 'react'

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',

    })

    return (
        <div className="container my-5 mx-6">
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" />
                </div>
                <div class="mb-3">
                    <label for="content">Email Content</label>
                    <textarea class="form-control" id="content" rows="3"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}