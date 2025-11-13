import { useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"
import ProductCard from "../components/ProductCard"
import type { Product } from "../components/ProductCard"
import withLoading from '../components/withLoading'
import { useCart } from "../context/CartContext"

function ProductGrid({products}: {products: Product[]}) {
    const {addItem} = useCart()
    return(
        <Row xs={1} md={2} lg={3} className="g-4">
            {products.map(p => (
                <Col key={p.id}>
                    <ProductCard product={p} onAddToCart={addItem} />
                </Col>
            ))}
        </Row>
    )
}

const ProductGridWithLoading = withLoading(ProductGrid)

export default function Products() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let cancelled = false
        async function load() {
            try{
                const url = 'https://6911dfdf52a60f10c81fa099.mockapi.io/Product'
                const res = await fetch(url)
                const data: Product[] = await res.json()
                if(!cancelled) setProducts (data)
            }
        finally {
            if (!cancelled) setLoading(false)
        }
        }
        load()
        return() => {
            cancelled = true
        }
    }, [])

    return(
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Products</h2>
            </div>
            <ProductGridWithLoading loading={loading} products={products} />
        </div>
    )
}