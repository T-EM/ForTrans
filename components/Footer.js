import React from 'react'
import styles from '../styles/Home.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                Powered by <code className={styles.code}>ForTrans</code>
            </p>
        </footer>
    )
}

export default Footer