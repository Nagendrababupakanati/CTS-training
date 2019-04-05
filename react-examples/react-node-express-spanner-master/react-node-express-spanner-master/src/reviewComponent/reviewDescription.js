import React from 'react';

class ReviewDescription extends React.Component {
    
    render() { 
        return ( 
            <span>
                Description: {this.props.description}!!!!
            </span>
         );
    }
}
 
export default ReviewDescription;