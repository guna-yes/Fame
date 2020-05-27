import React, { Component } from 'react'

class Register extends Component{
    render(){
        return(
            <div className="jumbotron m-5 text-center">
               <div className="row">
                    <div className="col-12 col-sm-6">
                                <h1 className="display"> Want more Information</h1>
                                <button className="btn btn-danger ">Click Here</button>
                    </div>
                    <div className="col-12 col-sm-6">
                        <h1 className="display"> TICKETS ON SALE</h1>
                        <button className="btn btn-danger ">REGISTER!!</button>

                    </div>

               </div>
            </div>
        )
    }
}

export default Register;
