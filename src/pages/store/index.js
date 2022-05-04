import Link from 'next/link';

const Index = () => {
  return (
    <>
    <h1>Welcome to Store</h1>
    <hr />
    <Link href='/'>
    <a>Go to home</a>
    </Link>
    </>
  )
}

export default Index