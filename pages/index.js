import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fortrans</title>
        <meta name="description" content="Team ForTrans" />
        <meta name="keywords" content="Fortrans, ForTrans, fortrans, Team Fortrans" />
        <link rel="icon" href="/fortrans.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ForTrans Blog
        </h1>

        <p className={styles.description}>
          Let your imagination be the mentor.
        </p>

        {/* <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn Python in 2022?</h3>
            <p>Python programming is very easy.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn Python in 2022?</h3>
            <p>Python programming is very easy.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn Python in 2022?</h3>
            <p>Python programming is very easy.</p>
          </div>
        </div> */}
      </main>
    </div>
  )
}
