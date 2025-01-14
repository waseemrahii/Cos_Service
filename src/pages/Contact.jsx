import React from 'react'
import Banner from '../components/Banner'
import Message from '../sections/Contact/Message'
import { ContactData } from '../utils/ContactData';

export default function Contact() {
    return (
        <>
            <Banner />
            <Message contactDetails={ContactData} />
        </>
    );
}