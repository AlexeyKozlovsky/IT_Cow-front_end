import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MyCard from '../Mycard'
import surg from '../../resources/surgeon.jpg'
import '../Mycard.css'
import card from '../Mycard.js'

import firebase from './../../firebase'

export default function DoctorsPage() {

    const dbRef = firebase.database().ref();
    var cardInfo = [];

    dbRef.child("cards").get().then((cards) => {
        if (cards.exists()) {
            cardInfo = cards.val();
            console.log(cards.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    
    return (
        // <Container style={{ paddingTop: '2rem', paddingBottom: '2rem'}}>
        //     <Row>
        //         <Col>
        //             <MyCard title="Хирург" desc="sdfdsf" img="https://firebasestorage.googleapis.com/v0/b/it-cow.appspot.com/o/doctor_images%2Fsurgeon.jpg?alt=media&token=3cfaec61-5d38-4347-8a93-e0cfbd154571"/>
        //         </Col>
        //     </Row>
        // </Container>
        <div>
            <div className="grid" style={{margin: '2rem', padding: '1rem', alignItems: 'center'}}>
                { cardInfo.map(card, index =>
            <MyCard doctorTypeId={card.doctor_type_id} desc={card.desc} imageId={card.image_id} key={index} className="box"/>
                )}
        
            </div>
        </div>
    )
}