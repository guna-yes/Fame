import React, { Component } from 'react';
import { Media, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';

class Venue extends Component{
    render(){

        const Hall = () => {
            return (
                <Media >
                    <Media left href="#">  </Media>
                    <Media body>
                        <Media heading>
                            Great Summit Banquet Hall
                    </Media>
                    <p className="lead">2000+ Seating</p>
                    <p className="lead">Fully Air Conditioned</p>   
                    <p className="lead">Prestigious</p>   
                    <p className="lead">Great Location</p>   
                </Media>
                </Media>
            );
        };
        const Image = (props) => {
            return (
                <div>
                    <Card className="shadow">
                        <CardImg src="https://globalsummit.tech/assets/uploads/sites/8/2019/11/GTS-web-570x380.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Address</CardTitle>
                            <CardText>#18, Krishna Summit, Outer Ring Rd, Aswath Nagar, Bengaluru, Karnataka 560037</CardText>
                            <Button className=" btn btn-primary">Find us on Maps</Button>
                        </CardBody>
                    </Card>
                </div>
            );
        };


        return(
           <div>
           <p className="display-3 m-5 text-center">Venue</p>
                <div className="container">
                    <div className="row">
                        <div className='col-12 col-md-6'>
                            <Hall  />
                        </div>
                        <div className='col-12 col-md-5'>
                            <Image />
                        </div>

                    </div>


                </div>
                <br className="m-2"></br>

           </div>

        )
    }
}


export default Venue;