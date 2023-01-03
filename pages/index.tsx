import Head from 'next/head'
import { About } from './src/components/About'
import { Banner } from './src/components/Banner'
import { Header } from './src/components/Header'
import { SkillList } from './src/components/SkillList'
import { WorkList } from './src/components/WorkList'

export default function Home() {
  return (
    <>
      <Head>
        <title>My portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Header />
      <Banner/>
      <About/>
      <WorkList/>
      <SkillList/>
      <Header />
      </main>
    </>
  )
}
