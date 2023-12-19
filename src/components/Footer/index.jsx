import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { PiWhatsappLogoLight } from 'react-icons/pi'
import s from './style.module.css'
import Container from '../UI/Container'


export default function Footer() {
    const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4090427798074!2d13.372469776146023!3d52.5079361371233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d00f714303%3A0xb7b4fcea44396e2d!2sAIT%20TR%20GmbH!5e0!3m2!1sru!2sde!4v1700060071546!5m2!1sru!2sde"
    return (
        <Container >
            <footer className={s.container}>
                <div className={s.contacts}>
                    <p>Contact</p>
                    <p className={s.number}>+4 999 999 99 99</p>
                    <div className={s.icons}>
                        <div>
                            <AiOutlineInstagram className={s.icon} />
                            <p>instagram</p>
                        </div>
                        <div>
                            <PiWhatsappLogoLight className={s.icon} />
                            <p>WhatsApp</p>
                        </div>
                    </div>
                </div>
                <div className={s.adress}>
                    <p>Address</p>
                    <div>
                        <p>Linkstraße 2, 8 OG, 10785,</p>
                        <p> Berlin, Deutschland</p>
                    </div>
                    <label htmlFor="">Working Hours:
                        <h2>24 hours a day</h2>
                    </label>
                </div>
            </footer>
            <div className={s.map}>
                <iframe src={iframeSrc} title='map'></iframe>
            </div>
        </Container>
    )
}
