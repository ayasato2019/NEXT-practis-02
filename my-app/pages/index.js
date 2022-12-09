import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next練習中</title>
        <meta name="description" content="Next練習中" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next練習中
        </h1>

        <h2>２回目はVercleにデプロイできるのか?
        </h2>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://borderlesss.net/"
          target="_blank"
          rel="noopener noreferrer"
        >borderlesss
        </a>
      </footer>
    </div>
  )
}
