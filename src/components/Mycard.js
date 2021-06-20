import { Card, Image } from "react-bootstrap";
import serg from '../resources/surgeon.jpg'

export default function MyCard({ doctor_type_id, desc, image_id }) {
    return (

        <Card style={{ width: '18rem'}}>
            <Card.Img variant="contain" src={image_id} />
            <Card.Body style={{ background: 'black', color: 'white'}}>
                <Card.Title>{doctor_type_id}</Card.Title>
                <Card.Text className="test-rect">{desc}</Card.Text>
            </Card.Body>
        </Card>
    )
}