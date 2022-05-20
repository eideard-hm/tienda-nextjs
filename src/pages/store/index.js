import Layout from '../../components/layout'
import Product from '../../components/product'
import { getItemsAsync } from '../../services/itemService'
import style from '../../../styles/product.module.css'

const Index = ({ products = [] }) => {
  return (
    <Layout title='Store'>
      <h1>Store</h1>
      <div className={style.items}>
        {products &&
          products.map(product => (
            <Product key={product.id} item={product} showAs='Default' />
          ))}
      </div>
    </Layout>
  )
}

/*
 * Esta función se ejecuta en el momento en que se compila nuestro código; y lo que se
 * hace es obtener los datos de la API, darles un formato que pide Next; y el resultado
 * va hacer una prop que vamos a inyectar en el componente
 */
export const getStaticProps = async () => {
  const res = await getItemsAsync()

  return {
    props: {
      products: res
    }
  }
}

export default Index
