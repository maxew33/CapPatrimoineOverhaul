'use client'

import React, { useRef, useState } from 'react'
import styles from './Contact.module.css'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faLinkedinIn,
    faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
    faCalendarDays,
    faEnvelope,
    faHandshakeSimple,
    faMobileScreen,
    faPaperPlane,
    faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'

export default function Contact() {
    const [modalDisplayed, setModalDisplayed] = useState(false)
    const [authChecked, setAuthChecked] = useState(false)
    const [error, setError] = useState(false)
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleInput = (e: { target: { value: any } }, target: any) => {
        setFormState((prevFormState) => ({
            ...prevFormState,
            [target]: e.target.value,
        }))
    }

    const handleChangeCheckBox = () => {
        setAuthChecked(!authChecked)
    }

    const form = useRef(null)

    const sendEmail = (event: { preventDefault: () => void }) => {
        event.preventDefault()

        if (authChecked) {
            setError(false)
            setAuthChecked(false)
            const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
            const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
            const user = process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            if (service && template && user && form.current) {
                emailjs
                    .sendForm(service, template, form.current, user)
                    .then(
                        (result) => {
                            setModalDisplayed(true)
                            setFormState({ name: '', email: '', message: '' })
                        },
                        (error) => {
                            alert("le message n'a pas pu être envoyé.")
                            console.error('FAILED...', error)
                        }
                    )
                    .catch((err) => {
                        console.error('FAILED...', err)
                    })
            }
        } else {
            setError(true)
        }
    }

    const displayModal = () => {
        setModalDisplayed(!modalDisplayed)
    }
  return (
    <main>

      <div className="banner banner-contact">
        <Image
          className='banner-img'
          src={'/assets/pen.webp'}
          width={2048}
          height={1536}
          alt="contact" />
        <div className="banner-title">
          Contactez-nous
        </div>

      </div>

      <div className="contact-wrapper page-wrapper">

        <div className="contact contact-direct">
          <div className="contact-title contact-direct-title">
            Directement
          </div>
          <div className="contact-direct-container">
            <div className="contact-direct-detail">
              <div className="contact-direct-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="contact-direct-name">
                appelez-nous
              </div>
              <div className="contact-direct-link">
                06-81-76-67-18
              </div>
            </div>

            <div className="contact-direct-detail">
              <div className="contact-direct-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-direct-name">
                écrivez-nous
              </div>
              <a href="mailto:cvconseilgestionpatrimoine@gmail.com"
                className="contact-direct-link">
                cvconseilgestionpatrimoine<br />@gmail.com
              </a>
            </div>
            <div className="contact-direct-detail">
              <div className="contact-direct-icon">
                <a href="https://www.linkedin.com/in/christophe-vitu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="link to linkedin">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
              <div className="contact-direct-name">
                linkedin
              </div>
              <div className="contact-direct-link">
              </div>
            </div>
          </div>
        </div>

        <div className="contact contact-form">
          <div className="contact-title contact-form-title">
            Ou en complétant le formulaire
          </div>

          <form
            className='contact-form'
            onSubmit={sendEmail}
            ref={form}>

            <div className="contact-form-inputs">
              <div className="contact-form-input">
                <input id="lastname-input"
                  type="text"
                  name="from_lastname"
                  required />
                <label
                  className="input-txt-label"
                  htmlFor="lastname-input">Nom *</label>
              </div>

              <div className="contact-form-input">
                <input id="firstname-input"
                  type="text"
                  name="from_firstname"
                  required />
                <label
                  className="input-txt-label"
                  htmlFor="firstname-input">Prénom *</label>
              </div>

              <div className="contact-form-input">
                <input
                  id="email-input"
                  type="email"
                  name="user_email"
                  required />
                <label
                  className="input-txt-label"
                  htmlFor="email-input">email *</label>
              </div>

              <div className="contact-form-input">
                <input
                  name="user_object"
                  id="object-input"/>
                <label
                  className="input-txt-label"
                  htmlFor="object-input">objet</label>
              </div>
            </div>

            <div className="contact-form-txt-sub">
              <textarea
                className='contact-form-txt'
                name="message"
                id="message-form"
                cols={30}
                rows={10}
                required>
              </textarea>
              <label
                className="input-txt-label"
                htmlFor="message-form">message</label>
              <button type='submit' value='send' className='contact-form-btn'>
                Envoyer
              </button>
            </div>
          </form>
        </div>

        {/* <div className="contact-form-sent"
          ref={success}>
          <div className="contact-form-sent-wrapper">

            <div className="contact-form-sent-message">
              <Image className="contact-form-sent-logo"
                src={'/assets/logoCapPatrimoine.webp'}
                height={200}
                width={200}
                alt="cabinet cap patrimoine" />
              <div>
                Message envoyé.
              </div>
            </div>
            <button
              className='contact-form-sent-button'
              onClick={handleClick}>
              OK
            </button>
          </div>
        </div> */}

      </div>

    </main>
  )
}
