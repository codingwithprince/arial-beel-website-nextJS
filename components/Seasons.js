import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';


const Seasons = () => {

    const seasons = [
        {name: "Summer", bName:"গ্রীষ্ম", link:"/summer", img: "https://discovery.sndimg.com/content/dam/images/discovery/editorial/Curiosity/2020/3/GettyImages-493591757.jpg.rend.hgtvcom.616.411.suffix/1583713886840.jpeg"},
        {name: "Rainy season", bName:"বর্ষা",  link:"/rainy", img: "https://www.localguidesconnect.com/t5/image/serverpage/image-id/112722i138DC037069601C4/image-size/large?v=v2&px=999"},
        {name: "Autumn", bName:"শরৎ", link:"/autumn", img: "https://www.privatephotoreview.com/wp-content/uploads/2015/10/Autumn-in-Bangladesh-640x427.jpg"},
        {name: "Late Autumn",bName:"হেমন্ত", link:"/lateautumn", img: "https://www.farmingbd.com/wp-content/uploads/2020/12/Bangladeshi-farmers-harvesting-vegetables.jpg"},
        {name: "Winter", bName:"শীত",  link:"/winter", img: "https://www.amarsangbad.com/images/news_picture/37298-jibon.jpg"},
        {name: "Spring", bName:"বসন্ত", link:"/spring", img: "https://media-eng.dhakatribune.com/uploads/2020/02/y6a7805-1582552722856.jpg"}
    ]

    return (
        <div className="seasons-area section-padding" id="seasons">
            <h2 className="text-center section-title">Seasons</h2>
            <Container>
                <Row>
                    {
                        seasons.map(data => <SingleSeason info={data} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

const SingleSeason = (props) => {
    const {name, img, link,bName} = props.info;
    return (
        <Col xs="12" sm="6" md="6" lg="4" className="season d-flex justify-content-center align-items-center">
            <Card className="text-white single-season">
            <Card.Img src={img} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title className="text-center">{bName}</Card.Title><br/>
            </Card.ImgOverlay>
            </Card>
            <a href="/" className="season-link">{name}</a>
        </Col>
    );
};


export default Seasons;