import React from 'react';
import _ from "underscore";
//import Cookies from "universal-cookie";
import api from "../api";
import { Card } from "reactstrap";
import { CardBody } from "reactstrap";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";


export default function List(props) {
    console.log("props", props);

    let rlist = props.props.critic_review;

    let first;

    function follow() {
        console.log(first.critic.id);
        api.follow(props.props.token.id,first.critic.id);
    }

    function unfollow() {
        console.log("unfollow");
        api.unfollow(props.props.token.id,first.critic.id);
    }


    if(rlist){
        first=_.first(rlist);
        let rdisp =  _.map(rlist, (ss, i) => <Result2 key={i} reviewlist={ss}/>);
        console.log("first review", first);

        let followList = props.props.user_follows;
        let button;

        let found = _.find(followList, function (o) {return o.id === first.critic.id});

        if(typeof found === "undefined" ){
            console.log("not found");
            button = <Link to={"/profile"}>
                <Button onClick={follow}>Follow</Button>
            </Link>;
        } else {
            console.log("found");
            button = <Link to={"/profile"}>
                <Button onClick={unfollow}>Unfollow</Button>
            </Link>;
        }

        return <div>
            <h5>{first.critic.firstName}'s Reviews</h5>
            { button }
            {rdisp}
        </div>;
    } else {
        return <div>
           loading
        </div>;
    }

}


function Result2(props){
    //let cookie = new Cookies();

    function details() {
        api.get_details(props.reviewlist.movie.imdbid);
    }

    // function deleteFromReviews(){
    //     let id = cookie.get('id');
    //     api.delete_review(id, props.reviewlist.id);
    // }

    // function editLink(){
    //     let id = cookie.get('id');
    //     api.get_details(props.sellerlist.movie.imdbid);
    //     api.get_link(props.sellerlist.id);
    // }

    function view(){
        api.get_review(props.reviewlist.id);
        api.get_details(props.reviewlist.movie.imdbid);
    }

    console.log("inside display",props);
    return <Card>
        <CardBody>
            <div>
                Title:{props.reviewlist.movie.title}
                <Link to={"/profile/list/"+ props.reviewlist.movie.imdbid}>
                    <Button onClick={details} className="btn btn-info">Details</Button>
                </Link>
                <Link to={"/viewReview"}>
                    <Button onClick={view} className="btn btn-info">View Review</Button>
                </Link>
            </div>
        </CardBody>
    </Card>;
}