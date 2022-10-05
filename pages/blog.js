import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'
import * as fs from 'fs'
import InfiniteScroll from 'react-infinite-scroll-component'

const allowedCards = parseInt(3);

const Blog = (props) => {
    // console.log(props)
    const [blogs, setBlogs] = useState(props.allBlogs);
    const [count, setCount] = useState(allowedCards);

    const fetchData = async () => {
        let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + allowedCards}`)
        setCount(count + allowedCards)
        let data = await d.json()
        setBlogs(data)
    };

    return (
        <div>
            <main className={styles.main}>

                <InfiniteScroll
                    dataLength={blogs.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={props.allCount !== blogs.length}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            {/* <b>Yay! You have seen it all</b> */}
                            <b>More blogs are comming soon!</b>
                        </p>
                    }
                >
                    {blogs.map((blogitem) => {
                        return (
                            <div key={blogitem.slug}>
                                <div>
                                    <Link href={`/blogpost/${blogitem.slug}`}>
                                        <h3>{blogitem.title}</h3>
                                    </Link>
                                    <p className={styles.blogItemp}>
                                        {blogitem.metadesc.substr(0, 40)}...<span className={styles.readmore}><Link href={`/blogpost/${blogitem.slug}`}>read more</Link></span>
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </InfiniteScroll>

                {/* {blogs.map((blogitem) => {
                    return (
                        <div key={blogitem.slug}>
                            <div>
                                <Link href={`/blogpost/${blogitem.slug}`}>
                                    <h3>{blogitem.title}</h3>
                                </Link>
                                <p className={styles.blogItemp}>
                                    {blogitem.metadesc.substr(0, 40)}...<span className={styles.readmore}><Link href={`/blogpost/${blogitem.slug}`}>read more</Link></span>
                                </p>
                            </div>
                        </div>
                    )
                })} */}
            </main >
        </div >
    )
}

export async function getStaticProps(context) {
    let data = await fs.promises.readdir("blogdata");
    let allCount = data.length;
    let myfile;
    let allBlogs = [];
    // for (let i = 0; i < data.length; i++) {
    for (let i = 0; i < allowedCards; i++) {
        const item = data[i];
        // console.log(item)
        myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
        allBlogs.push(JSON.parse(myfile))
    }

    return {
        props: { allBlogs, allCount },
    }
}

export default Blog 