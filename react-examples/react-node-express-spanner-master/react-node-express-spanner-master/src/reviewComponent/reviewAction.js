import React from 'react';


class ReviewAction extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            reviewLikes:parseInt(this.props.likecount)
        }
        this.likeClicked = this.likeClicked.bind(this)
        this.unlikeClicked = this.unlikeClicked.bind(this)
    }

    likeClicked = function(){
        console.log("like clicked")
        //this.state.reviewLikes = this.state.reviewLikes + 1
        this.setState({reviewLikes:this.state.reviewLikes + 1})
    }

    unlikeClicked = function(){
        this.setState({reviewLikes: this.state.reviewLikes - 1})
    }

    render() { 
        return (
            <span>
                <button onClick={this.likeClicked}>Like</button>
                &nbsp;&nbsp;{this.state.reviewLikes}&nbsp;&nbsp;
                <button onClick={this.unlikeClicked}> Unlike</button>
            </span>
          );
    }
}
 
export default ReviewAction;