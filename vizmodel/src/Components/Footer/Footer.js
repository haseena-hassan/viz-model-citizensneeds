import React from 'react'
import './Footer.css'
class Footer extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            example:false
        }
    }
    render(){
        return(
            <div class="footer">
                <p>
                    &copy; Copyright Governance Innovation Labs. 
                </p>
            </div>
        )
    }
}
export default Footer;