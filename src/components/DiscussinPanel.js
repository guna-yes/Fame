import React, { Component } from 'react'
import { Card, CardImg,  CardBody,CardTitle} from 'reactstrap';


class Discussion extends Component {
    render() {
  
        const Landscape = (props) => {
            return (
                <div>
                    <Card className="shadow">
                        <CardImg  src="https://globalsummit.tech/assets/uploads/sites/8/2019/11/GTS-D-Landscape-AI-1200x650.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Landscape of AI</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );
        };

        const Languages = (props) => {
            return (
                <div>
                    <Card className="shadow">
                        <CardImg  src="https://globalsummit.tech/assets/uploads/sites/8/2019/11/GTS-D-TOP5-1200x632.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Landscape of AI</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );
        };
       
        const Interview = (props) => {
            return (
                <div>
                    <Card className="shadow">
                        <CardImg  src="https://globalsummit.tech/assets/uploads/sites/8/2019/11/GTS-D-Interview-1200x650.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Interview Tips</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );
        };

        const Dev = (props) => {
            return (
                <div>
                    <Card className="shadow">
                        <CardImg   src="https://globalsummit.tech/assets/uploads/sites/8/2019/11/GTS-D-DevelopmentTrends-1200x632.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Dev Trends 2020</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );
        };
        return (
            <div className=" container shadow bg-dark-gray text-center">
                <p className="display-4 m-5">DISCUSSION PANEL</p>
                    <div className="row">
                        <div className="col-12 col-sm-5 " >
                            <Landscape />
                        </div>
                        <div className="col-12  col-sm offset-2" >
                            <Languages />
                        </div>
                        
                        <div className="row " >
                                <div className="col-12  col-sm-5">
                                    <Interview />
                                </div>
                                <div className="col-12 col-sm offset-2">
                                    <Dev />
                                </div>
                        </div>
                 </div>
            </div>


        )
    }
}

export default Discussion;