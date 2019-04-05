import React from 'react';
import ReviewAction from './reviewAction';


class ReviewUser extends React.Component {
    
    render() { 
        return ( <span>
                    <img></img>
                    username &nbsp;&nbsp;
                    <ReviewAction likecount={this.props.like}></ReviewAction>
                </span> 
        );
    }
}
 
export default ReviewUser;