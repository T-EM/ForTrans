import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'
import * as fs from 'fs';

const Slug = (props) => {
    const [blog, setBlog] = useState(props.myBlog);
    // const router = useRouter();
    // useEffect(() => {
    //     if (!router.isReady) return;
    //     const { slug } = router.query;
    //     fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
    //         return a.json();
    //     }).then((parsed) => {
    //         // console.log(parsed)
    //         setBlog(parsed)
    //     })
    // }, [router.isReady])
    // console.log(router.query);
    function createMarkup(c) {
        return { __html: c };
    }
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>{blog && blog.title}</h1>
                {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
                <br />
                <div className={styles.author}>
                    - Author : {blog && blog.author}
                </div>
            </main>
        </div>
    );
};

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'how-to-learn-flask' } },
            { params: { slug: 'how-to-learn-javascript' } },
            { params: { slug: 'how-to-learn-nextjs' } },
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {
    // console.log(context.params);
    // const router = useRouter();
    const { slug } = context.params;

    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

    return {
        props: { myBlog: JSON.parse(myBlog) },
    }
}

export default Slug;