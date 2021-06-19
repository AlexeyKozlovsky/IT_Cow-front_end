import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MyCard from '../Mycard'
import surg from '../../resources/surgeon.jpg'
import '../Mycard.css'

import firebase from './../../firebase'

export default function DoctorsPage() {

    const dbRef = firebase.database().ref();
    let cardInfo = [];

    dbRef.child("cards").get().then(async (cards) => {
        if (cards.exists()) {
            cardInfo = await cards.val();
            console.log(cards.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

    const renderCard = (card, index) => {
        return (
            <MyCard doctorTypeId={card.doctor_type_id} desc={card.desc} imageId={card.image_id} key={index} className="box"/>
        )
    }

    console.log(cardInfo);
    return (
        // <Container style={{ paddingTop: '2rem', paddingBottom: '2rem'}}>
        //     <Row>
        //         <Col>
        //             <MyCard title={cardInfo[0].title} />
        //         </Col>
        //     </Row>
        // </Container>
        <div>
            <div className="grid" style={{margin: '2rem', padding: '1rem', alignItems: 'center'}}>
                { cardInfo.map(renderCard) }
            </div>
        </div>
    )
}