import { Card, Image } from "react-bootstrap";
import serg from '../resources/surgeon.jpg'


export default function MyCard({ title, desc, img }) {
    return (

        <Card style={{ width: '18rem'}}>
            <Card.Img variant="contain" src={img} />
            <Card.Body style={{ background: 'black', color: 'white'}}>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="test-rect">{desc}</Card.Text>
            </Card.Body>
        </Card>
    )
}