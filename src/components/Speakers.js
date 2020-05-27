import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Speakers extends Component {
    render()
    {

        const Speaker1 = (props) => {
            return(
            <div>
                <Card>
                    <CardImg top width="100%" src="https://globalsummit.tech/assets/uploads/sites/8/2019/12/Photo_Fandakova_300x300.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle><em><strong>YORDANKA</strong></em></CardTitle>
                            <CardSubtitle>MAYOR OF SOFIA
</CardSubtitle>
                            <CardText>Her previous positions include elected Member of Parliament in 2009, Minister of Education, Youth and Science of the Republic of Bulgaria in 2009, Sofia Deputy Mayor for Culture, education and Sports in 2007-2009. Prior to that she gained rich 20-year experience in the area of education as a teacher and as a school principle of Vladislav Gramatik Secondary Comprehensive School with Foreign Language Teaching in Sofia.</CardText>
                    </CardBody>
                </Card>
            </div>)
        }
        const Speaker2 = (props) => {
            return(
            <div>
                <Card>
                    <CardImg top width="100%" src="https://globalsummit.tech/assets/uploads/sites/8/2019/12/IvaAbadjieva_v2.jpg" alt="Card image cap" />
                    <CardBody>
                            <CardTitle><em><strong>IVA ABADJIEVA</strong></em></CardTitle>
                        <CardSubtitle>CEO at INNOVATION CENTER INC.</CardSubtitle>
                        <CardText>Iva Abadjieva is the founder of Java2Days – a leading Java tech conference in Bulgaria and the region.The idea of an independent Bulgarian Java conference came to life more than 9 years ago. It took me about 6 months to think it through and decide to start the project. Such endeavor requires a solid investment – not just financially, but also in terms of time, dedication and, of course, ambition with a pinch of madness.</CardText>
                    </CardBody>
                </Card>
            </div>
            )
        }
        const Speaker3 = () => {
            return (
            <div>
                <Card>
                    <CardImg top width="100%" src="https://globalsummit.tech/assets/uploads/sites/8/2019/11/ivangeorgiev300x300.jpg" alt="Card image cap" />
                    <CardBody>
                            <CardTitle><em><strong>IVAN GEORGIEV</strong></em></CardTitle>
                        <CardSubtitle>Manager of Kaufland Service </CardSubtitle>
                        <CardText>Ivan Georgiev is the Manager of Kaufland Service IT Hub since its opening in 2016. The Hub is part of the Schwarz group which operates in 29 countries, on three continents and has more than 400 000 employees worldwide. The most famous brands gathered under its hat are Kaufland, Lidl & GreenCycle. The company here in Bulgaria is responsible for the operations of more than 11 000 stores. Its main strengths lie in Development, Infrastructure and Business & Application Support.</CardText>
                    </CardBody>
                </Card>
            </div>)
        }
        const Speaker4 = () => {
            return (
            <div>
                <Card>
                        <CardImg top width="100%" src="https://globalsummit.tech/assets/uploads/sites/8/2019/11/dave300x300.jpg" alt="Card image cap" />
                    <CardBody>
                            <CardTitle><em><strong>DAVE MORRIS</strong></em></CardTitle>
                        <CardSubtitle> REWE DIGITAL</CardSubtitle>
                        <CardText>Dave Morris is the Delivery Director and Head of Engineering for REWE Digital, a provider of online strategy and execution for the REWE Group – a $60B German retail and tourism group that includes the REWE supermarket chain which has more than 15,000 stores and 360,000 employees worldwide.</CardText>
                    </CardBody>
                </Card>
         
            </div>)
        }


    return (
        <div className="container text-center ">

        <h1 className="display-4"> SPEAKERS</h1>
        <div className="row ">
        <div className="col-12 col-sm-5  shadow">
        <Speaker1/>

        </div>
        <div className="col col-sm"></div>
                <div className="col-12 col-sm-5  shadow">
            <Speaker2 />

        </div>
            
        </div>
            <div className="row">
                <div className="col-12 col-sm-5 shadow">
                    <Speaker3 />

                </div>
                <div className="col col-sm"></div>

                <div className="col-12 col-sm-5 shadow ">
                    <Speaker4 />

                </div>

            </div>

        </div>   
    );
    }
    
};


export default Speakers;