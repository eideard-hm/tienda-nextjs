import Layout from '../../components/layout'
import Product from '../../components/product'
import { getItemByIdAsync, getPathFromIds } from '../../utils/utils'

const ProductPage = ({ product }) => {
  return (
    <Layout>
      <Product item={product} showAs='Page' />
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const paths = await getPathFromIds()

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const id = params.id
  const product = await getItemByIdAsync(id)

  return {
    props: {
      product: product.data
    }
  }
}

export default ProductPage
