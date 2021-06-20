import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MyCard from '../Mycard'
import surg from '../../resources/surgeon.jpg'
import '../Mycard.css'
import card from '../Mycard.js'

import firebase from './../../firebase'
import { StylesProvider } from '@material-ui/core'

// export default function DoctorsPage() {

//     const dbRef = firebase.database().ref();
//     let cardInfo = [];

//     dbRef.child("cards").get().then((cards) => {
//         if (cards.exists()) {
//             setTimeout(() => {cardInfo = cards.val();}, 60000)
            
//             console.log(cards.val());
//         } else {
//             console.log("No data available");
//         }
//     }).catch((error) => {
//         console.error(error);
//     });
    
//     const renderCard = (card, index) => {
//         return (
//             <MyCard doctorTypeId={card.doctor_type_id} desc={card.desc} imageId={card.image_id} key={index} className="box"/>
//         )
//     }

//     console.log(cardInfo);
//     return (
//         // <Container style={{ paddingTop: '2rem', paddingBottom: '2rem'}}>
//         //     <Row>
//         //         <Col>
//         //             <MyCard title={cardInfo[0].title} />
//         //         </Col>
//         //     </Row>
//         // </Container>
//         <div>
//             <div className="grid" style={{margin: '2rem', padding: '1rem', alignItems: 'center'}}>
//                 { cardInfo.map(card, index =>
//             <MyCard doctorTypeId={card.doctor_type_id} desc={card.desc} imageId={card.image_id} key={index} className="box"/>
//                 )}
        
//             </div>
//         </div>
//     )
// }

export default class DoctorsPage extends React.Component {

    constructor() {
        super()
        let cardInfo;
        this.state = {cardInfo: []}
    }

    componentDidUpdate() {
        const dbRef = firebase.database().ref();

        dbRef.child("cards").get().then((cards) => {
            if (cards.exists()) {
                this.state.cardInfo = cards.val()
                
                console.log(cards.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });

        this.render()
    }

    render() {
        return (
            // <div>{this.cardInfo}</div>
            <div className="grid" style={{margin: '2rem', padding: '1rem', alignItems: 'center'}}>
                { this.state.cardInfo.map(card, index =>
            <MyCard doctorTypeId={card.doctor_type_id} desc={card.desc} imageId={card.image_id} key={index} className="box"/>
                )}
        
            </div>
        ) 
    }
}