import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [desc, setDesc] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, phone, desc)
        const data = { phone, name, email, desc };

        fetch('http://localhost:3000/api/postcontact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
                alert("Form Submitted successfully. Thank You.");
                setName('');
                setEmail('');
                setPhone('');
                setDesc('');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const handleChange = (e) => {
        if (e.target.name == 'name') {
            setName(e.target.value)
        }
        else if (e.target.name == 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name == 'phone') {
            setPhone(e.target.value)
        }
        else if (e.target.name == 'desc') {
            setDesc(e.target.value)
        }
    }


    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.mb3}>
                        <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
                        <input type="text" value={name} onChange={handleChange} className={styles.box} id="name" name="name" required autoComplete='true' />
                    </div>
                    <div className={styles.mb3}>
                        <label htmlFor="email" className={styles.formlabel}>Email address</label>
                        <input type="email" value={email} onChange={handleChange} className={styles.box} id="email" name="email" required aria-describedby="emailHelp" autoComplete='false' />
                        {/* <div id="emailHelp" className="htmlform-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className={styles.mb3}>
                        <label htmlFor="phone" className={styles.formlabel}>Phone no.</label>
                        <input type="phone" value={phone} onChange={handleChange} name="phone" className={styles.box} id="phone" required autoComplete='true' />
                    </div>
                    <div className={styles.mb3}>
                        <label htmlFor="desc" className={styles.formlabel}>Elaborate your concern</label>
                        <textarea value={desc} name="desc" className="htmlform-content" onChange={handleChange} required placeholder="Write here" id="desc" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </main>
    )
}

export default Contact