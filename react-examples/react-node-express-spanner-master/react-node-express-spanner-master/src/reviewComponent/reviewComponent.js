import React from 'react';
import ReviewTitle from './reviewTitle';
import ReviewDescription from './reviewDescription';
import ReviewUser from './reviewUser';

class ReviewComponent extends React.Component {
   
    render() { 
        return (  
            <div>
                <ReviewTitle title={this.props.children}></ReviewTitle>
                <br></br>
                <ReviewDescription description = {this.props.desc}></ReviewDescription>
                <br></br>
               <ReviewUser like = {this.props.likes}></ReviewUser>
                <hr></hr>
            </div>
        );
    }
}
 
export default ReviewComponent;