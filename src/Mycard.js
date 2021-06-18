import { Card } from "react-bootstrap";
import serg from './resources/surgeon.jpg'


export default function MyCard() {
    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="contain" src={serg} />
            <Card.Body>
                <Card.Title>Хирург</Card.Title>
                <Card.Text className="test-rect">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}