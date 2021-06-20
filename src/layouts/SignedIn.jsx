import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({ SignOut }) {
    return (
        <div>
            <Menu.Item>
                <Image avtar size="mini" circular spaced="right" src="https://donanimgunlugu.com/wp-content/upload/2020/04/1-milyon-yaz%C4%B1l%C4%B1mc%C4%B1-projesinin-detaylar%C4%B1-yeni.jpeg" />
                <Dropdown pointing="top right" text="Asilay" >
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={SignOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
