import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history = useHistory()

    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed="top" color={"violet"}>
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />

                    <Menu.Menu position='right'>

                        <CartSummary />

                        {isAuthenticated ? <SignedIn SignOut={handleSignOut} /> : <SignedOut SignIn={handleSignIn} />}

                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
