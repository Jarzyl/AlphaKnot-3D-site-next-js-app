import Navbar from '@/components/Nav'
import Head from 'next/head'
import Search from '@/components/Search'
import About from '@/components/About'
import MyStructure from '@/components/MyStructure'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alphaknot 3D</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Search/>
      <About/>
      <MyStructure/>
    </>
  )
}
