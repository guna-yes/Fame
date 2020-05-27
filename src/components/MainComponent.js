import React,{Component} from 'react'
import Header from './Header'
import Venue from './Venue'
import Attendees from './Attendees'
import Discussion from './DiscussinPanel'
import Register from './Register'
import Speakers from './Speakers'
import Footer from './Footer'
import Partners from './Partners'



class Main extends Component{
    render(){
        return(
            <div className="">

               <Header/>  
               <Venue/>
               <Attendees/>
               <Discussion/>
               <Register/>
               <Speakers/>
               <Partners/>
               <Footer/>
            </div>
        )
    }
}

export default Main