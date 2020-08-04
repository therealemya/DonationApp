import React,{Component} from 'react';
import unnamed from '../../images/unnamed.jpg';
import LoginButton from '../ButtonContainer/LoginButton';

export default class welcome extends Component{
  render() {
     
    return(
        <div className="welcome">
            <div className="welcome-info">
                <h1>CodeDifferently Donation App</h1>

                <div>
                    <img src={unnamed} alt="unnamed" className="welcomelogo" />
                </div>
            </div>
        </div>
    )
  }
}
