import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/blogs').then((a) => {
            return a.json();
        }).then((parsed) => {
            // console.log(parsed)
            setBlogs(parsed)
        })
    }, [])
    return (
        <div>
            <main className={styles.main}>
                {blogs.map((blogitem) => {
                    return (
                        <div key={blogitem.slug}>
                            <div>
                                <Link href={`/blogpost/${blogitem.slug}`}>
                                    <h3>{blogitem.title}</h3>
                                </Link>
                                <p className={styles.blogItemp}>
                                    {blogitem.content.substr(0, 140)}...<span className={styles.readmore}><Link href={`/blogpost/${blogitem.slug}`}>read more</Link></span>
                                </p>
                            </div>
                        </div>
                    )
                })}
                {/* <div>
                    <div className="blogItem">
                        <Link href={'/blogpost/learn-python'}>
                            <h3>How to learn Python in 2022?</h3>
                        </Link>
                        <p>Python programming is very easy.</p>
                    </div>
                    <div className="blogItem">
                        <Link href={'/blogpost/learn-javascript'}>
                            <h3>How to learn Python in 2022?</h3>
                        </Link>
                        <p>Python programming is very easy.</p>
                    </div>
                </div> */}
            </main >
        </div >
    )
}

export default Blog 