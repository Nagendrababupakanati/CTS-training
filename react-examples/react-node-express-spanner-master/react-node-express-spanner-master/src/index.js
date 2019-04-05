import React from 'react';
import ReactDOM from "react-dom";
import PageTitle from './rootComponent';
import ReviewComponent from './reviewComponent/reviewComponent';
import FriendComponent from './friendspanner/friendComponent';

ReactDOM.render(<span>
                    <div>
                        <PageTitle></PageTitle>
                    </div>
                    <div>
                        <ReviewComponent likes="10" desc="Good">Samsung Note 5</ReviewComponent>
                        <ReviewComponent likes="2" desc="OK">Iphone X</ReviewComponent>
                        <ReviewComponent likes="22" desc="Too Good">DJI Tello</ReviewComponent>
                        <ReviewComponent likes="15" desc="Unbelievable">Coolpix 9</ReviewComponent>
                    </div>
                    <div>
                        <FriendComponent></FriendComponent>
                    </div>
                </span>, 

                document.getElementById('entrypoint'))
