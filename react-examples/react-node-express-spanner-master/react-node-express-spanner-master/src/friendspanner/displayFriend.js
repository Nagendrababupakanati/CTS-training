import React from 'react';



class DisplayFriend extends React.Component {

    constructor(props){
        super(props)
        this.activateFriend = this.activateFriend.bind(this)
    }

    activateFriend = function(){
        console.log("friend clicked")
        this.props.clickFriend(parseInt(this.props.id))
    }


    render() { 
        return ( 
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.location}</td> 
                <td>
                    <button onClick={this.activateFriend}>Like</button>
                </td>
            </tr>
         );
    }
}
 
export default DisplayFriend;