import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>AirBnB</title>
        <meta name="description" content="AirBnb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
    </div>
  )
}
