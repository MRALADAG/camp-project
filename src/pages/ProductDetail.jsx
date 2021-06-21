import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductService from '../services/productService'
import { Button, Card, Image } from 'semantic-ui-react'

export default function ProductDetail() {

    let { id } = useParams()

    // let { name } = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        let producService = new ProductService()
        producService.getProductById(id).then(result => setProduct(result.data.data))
    }, [])

    // useEffect(() => {
    //     let producService = new ProductService()
    //     producService. getByProductName(name).then(result => setProduct(result.data.data))
    // }, [])

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>{product.id}</Card.Header>
                        <Card.Meta>{product.productName}</Card.Meta>
                        <Card.Description>
                            {/* <strong>{product.category.categoryName}</strong> */}
                            <strong>{product.quantityPerUnit}</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
