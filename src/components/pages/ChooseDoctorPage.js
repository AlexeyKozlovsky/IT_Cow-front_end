import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MyCard from '../Mycard'
import surg from '../../resources/surgeon.jpg'
import '../Mycard.css'



export default function DoctorsPage() {

    const cardInfo = [
        { title: "Хирург", desc: "sdfdsf", img: "https://firebasestorage.googleapis.com/v0/b/it-cow.appspot.com/o/doctor_images%2Fsurgeon.jpg?alt=media&token=3cfaec61-5d38-4347-8a93-e0cfbd154571" },
        { title: "sdfdsfdsfг", desc: "sdfdsf", img: "https://firebasestorage.googleapis.com/v0/b/it-cow.appspot.com/o/doctor_images%2Fsurgeon.jpg?alt=media&token=3cfaec61-5d38-4347-8a93-e0cfbd154571" },
        { title: "Хирург", desc: "sdfdsf", img: "https://firebasestorage.googleapis.com/v0/b/it-cow.appspot.com/o/doctor_images%2Fsurgeon.jpg?alt=media&token=3cfaec61-5d38-4347-8a93-e0cfbd154571" },
        { title: "Хирург", desc: "sdfdsf", img: "https://firebasestorage.googleapis.com/v0/b/it-cow.appspot.com/o/doctor_images%2Fsurgeon.jpg?alt=media&token=3cfaec61-5d38-4347-8a93-e0cfbd154571" },
        { title: "Хирург", desc: "sdfdsf", img: "https://firebasestorage.googleapis.com/v0/b/it-cow.appspot.com/o/doctor_images%2Fsurgeon.jpg?alt=media&token=3cfaec61-5d38-4347-8a93-e0cfbd154571" },
        { title: "asd", desc: "sdfdsf", img: "https://firebasestorage.googleapis.com/v0/b/it-cow.appspot.com/o/doctor_images%2Fsurgeon.jpg?alt=media&token=3cfaec61-5d38-4347-8a93-e0cfbd154571" },
        { title: "Хирург", desc: "sdfdsf", img: "https://firebasestorage.googleapis.com/v0/b/it-cow.appspot.com/o/doctor_images%2Fsurgeon.jpg?alt=media&token=3cfaec61-5d38-4347-8a93-e0cfbd154571" },
        { title: "Хирург", desc: "sdfdsf", img: "https://firebasestorage.googleapis.com/v0/b/it-cow.appspot.com/o/doctor_images%2Fsurgeon.jpg?alt=media&token=3cfaec61-5d38-4347-8a93-e0cfbd154571" },
        { title: "Хирург", desc: "sdfdsf", img: "https://firebasestorage.googleapis.com/v0/b/it-cow.appspot.com/o/doctor_images%2Fsurgeon.jpg?alt=media&token=3cfaec61-5d38-4347-8a93-e0cfbd154571" },
        { title: "Хирург", desc: "sdfdsf", img: "https://firebasestorage.googleapis.com/v0/b/it-cow.appspot.com/o/doctor_images%2Fsurgeon.jpg?alt=media&token=3cfaec61-5d38-4347-8a93-e0cfbd154571" }
    ]

    const renderCard = (card, index) => {
        return (
            <MyCard title={card.title} desc={card.desc} img={card.img} key={index} className="box"/>
        )
    }
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
            { cardInfo.map(renderCard) }
        </div>
        </div>
        


    )
}