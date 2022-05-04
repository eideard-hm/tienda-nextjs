import Head from 'next/head'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>GitHub Merch {title && `| ${title}`}</title>
        <meta name='description' content='Store with github products' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>{children}</div>
    </>
  )
}

export default Layout
