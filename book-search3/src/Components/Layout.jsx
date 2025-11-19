import React from 'react'
import styles from "./Books.module.css"
import "../style.css"

function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <nav>
                    <ul>
                        <li><a href="">home</a></li>
                        <li><a href="">weblog</a></li>
                        <li><a href="">details</a></li>
                        <li><a href="">archive</a></li>
                        <li><a href="">about</a></li>
                        <li><a href="">contact</a></li>
                        <li><a href="">services</a></li>
                    </ul>
                </nav>
            </header>

            {children}

            <footer className={styles.footer}>
                <nav>
                    <ul>
                        <li><a href="">home</a></li>
                        <li><a href="">weblog</a></li>
                        <li><a href="">details</a></li>
                        <li><a href="">archive</a></li>
                        <li><a href="">about</a></li>
                        <li><a href="">contact</a></li>
                        <li><a href="">services</a></li>
                        <li><a href="">galery</a></li>

                    </ul>
                </nav>
            </footer>
        </>
    )
}

export default Layout