import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../../components/Map'), {
	ssr: false
})

  
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Listening Ear Safeguarding - Map test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
	  <Map />
    </div>
  )
}
