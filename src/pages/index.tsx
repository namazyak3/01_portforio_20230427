import { Footer, Header } from '@/component/layout'
import { NextPage } from 'next'
import styles from '@/styles/index.module.scss'

const IndexPage: NextPage = () => {
  return (
    <>
      <Header />
      <div className={styles.content}></div>
      <Footer />
    </>
  )
}

export default IndexPage
