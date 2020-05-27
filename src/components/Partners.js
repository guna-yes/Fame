import React, { Component } from "react"
import {
    Card, CardImg,
} from 'reactstrap';

class Partners extends Component{
    render(){
        const Bosch = () => {
            return (
                <div>
                    <Card>
                        <CardImg   src="./bosch.png" alt="Card image cap" />

                    </Card>
                </div>
            );
        };
        const Itc = (props) => {
            return (
                <div>
                    <Card>
                        <CardImg   src="./itc.png" alt="Card image cap" />
                        
                    </Card>
                </div>
            );
        };
        const Vm = (props) => {
            return (
                <div>
                    <Card>
                        <CardImg src="./VMware.png" alt="Card image cap" />
                        
                    </Card>
                </div>
            );
        };
        
        return(
            <div className="container">
            <h1 className="display-4 text-center mt-5">PARTNERS</h1>
                <div className="row">
                <div className="col-12 col-sm-4">
                <Bosch/>

                </div>
                    <div className="col-12 col-sm-3 col-md-3" >
                    <Itc/>

                    </div>
                    <div className="col-12 col-sm-4">
                    <Vm/>

                    </div>

                </div>
            </div>

        )
    }
}

export default Partners