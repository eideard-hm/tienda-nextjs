import Head from 'next/head'
import style from '../../styles/layout.module.css';
import Menu from './menu';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>GitHub Merch {title && `| ${title}`}</title>
        <meta name='description' content='Store with github products' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Menu />

      <div className={style.container}>{children}</div>
    </>
  )
} 

export default Layout
