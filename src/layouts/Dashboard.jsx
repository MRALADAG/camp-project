import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right" />
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={ProductList} />
                        <Route exact path="/products" component={ProductList} />
                        <Route path="/products/:id" component={ProductDetail} />
                        {/* <Route path="/products/:name" component={ProductDetail} /> */}
                        <Route exact path="/cart" component={CartDetail} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

//  <Route path="/products/:productName" component={ProductDetail} /> 
// Bu ifadeyle de tarayıcıda ürün ismine göre ProductDetail'e yönlendirebilirdik.


// rfc snippet'ıyla ilk component'imiz için fonksiyon oluştururuz.
// Buradaki Dashboard() ifadesi yeni bir JSX tag'i dir.