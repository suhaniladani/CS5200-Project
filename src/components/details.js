import React from 'react';

import {Card, CardBody, CardTitle, Button} from 'reactstrap';

export default function Details(params) {
    console.log("details", params.params.details);
    let props=params.params.details;

    function add() {
        alert("Please Login");
    }
    return(
        <Card>
            <CardBody>
                <CardTitle>
                    {props.Title}
                </CardTitle>
                <div>
                    <img src={props.Poster} alt="Poster"/>
                    <ul>
                        <li>
                            Plot: {props.Plot}
                        </li>
                        <li>
                            Actors: {props.Actors}
                        </li>
                        <li>
                            Director: {props.Director}
                        </li>
                        <li>
                            Writer: {props.Writer}
                        </li>
                        <li>
                            Genre: {props.Genre}
                        </li>
                        <li>
                            Runtime: {props.Runtime}
                        </li>
                        <li>
                            Released: {props.Released}
                        </li>
                        <li>
                            Imdb Rating: {props.imdbRating}
                        </li>
                        <li>
                            Imdb Votes: {props.imdbVotes}
                        </li>
                        <li>
                            Awards: {props.Awards}
                        </li>
                    </ul>
                    <Button onClick={add}>Add to Watchlist</Button>
                </div>
            </CardBody>
        </Card>
    )
}