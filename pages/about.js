import React from 'react'
import Link from 'next/link'
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <main className={styles.main}>
            <h1>About ForTrans</h1>
            <div className={styles.container}>
                <h2>Introduction</h2>
                <p>We are the organisation know as Fortrans.<br />We build efficient and powerful solutions of your problems.</p>
                <h2>Contact Us</h2>
                <p className={styles.contactpara}>You can contact us <Link href='/contact'><a>here</a></Link>. We will reach you soon.</p>
            </div>
        </main>
    )
}

export default About