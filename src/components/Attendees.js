import React,{Component} from  'react'
import { Media } from 'reactstrap';


class Attendess extends Component{
    render()
    {
        const Software = () => {
            return (
                <Media className="shadow">
                    <Media left href="#">
                        <Media width="100" height="100" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/software-development-25-993511.png" alt="Generic placeholder image" />
                    </Media>
                        <Media heading>
                           SOFTWARE DEVELOPERS&IT PROFESSINALS
                     </Media>
                </Media>
            );
        };
        const Founders = () => {
            return (
                <Media className="shadow">
                    <Media left href="#">
                        <Media width="100" height="100" src="https://static.thenounproject.com/png/16966-200.png" alt="Generic placeholder image" />
                    </Media>
                    <Media heading>
                        ENTREPRENEURS & FOUNDERS
                     </Media>
                </Media>
            );
        };
        const Business = () => {
            return (
                <Media className="shadow">
                    <Media left href="#">
                        <Media width="100" height="100" src="https://cdn3.iconfinder.com/data/icons/wireless-payments-responsive-design/256/pay_cash-512.png" alt="Generic placeholder image" />
                    </Media>
                    <Media heading>
                        INVESTORS & BUSINESS LEADERS
                     </Media>
                </Media>
            );
        };

        return(
            <div className="container text-center">
            <p className="display-4 m-5">WHO ATTENDS?</p>
                 <div className="row">
                    <div className="col-12  col-sm-6   ">
                                <Software />
                    </div>
                    <div className="col-12  col-sm-6 " >
                        <Founders />
                    </div> 
                    <div className="col-12  col-md-3">
                    
                    </div>
                    <div className="col-12  col-md-6 m-2">
                        <Business />
                    </div>  
                </div>    
            </div>
        )
    }
}

export default Attendess;