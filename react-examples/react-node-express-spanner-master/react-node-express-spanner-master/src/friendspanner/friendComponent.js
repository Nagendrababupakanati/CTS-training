import React from 'react';
import axios from 'axios'
import DisplayFriend from './displayFriend';

class FriendComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            friendslist:[]
        }

    }


   componentWillMount(){
    console.log("will mount")
    this.getFriendData()
    }

    getFriendData = function(){
       /*  axios.get("http://localhost:1111/all").then((response)=>{
            console.log(response.data)
        }) */
        axios.get("http://localhost:1234/spanner/all").then(response =>{
            console.log(response.data)
            this.setState({friendslist:response.data})
            console.log("Response.data is transferred to friendslist state")
            console.log(this.state.friendslist)
        })
    }

    wakeUpFriend = function(myid){
        console.log("Wake Up friend Called!!!! for " + myid)
    }

    displayFriends = function(){
        console.log("Display Friends Called.... I will display each frined - one at a time - using map function!!!!")
        return this.state.friendslist.map((friend)=>{
            return(<DisplayFriend
                        key={friend.id}
                        name={friend.name}
                        id={friend.id}
                        location={friend.location}
                        clickFriend={this.wakeUpFriend}
                ></DisplayFriend>)
        })
    }


    render() { 
        return ( 
            <div>
                <p>Friends list from REST API call will come here!!!!</p>
                <table border="1">                
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.displayFriends()}
                    </tbody>
                
                </table>

            </div>
         );
    }
}
 
export default FriendComponent;