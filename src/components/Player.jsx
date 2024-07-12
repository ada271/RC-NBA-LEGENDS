import React, { useState } from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, img, statistics }) => {
    const [showResim, setShow] = useState(true);

    return (
        <Card
            className="rounded m-auto player-card"
            role="button"
            onClick={() => setShow(!showResim)}
        >
            {showResim ? (
                <Card.Img className="player-resim" variant="top" src={img} />
            ) : (
                <ul>
                    <li>{statistics[0]}</li>
                    <li>{statistics[1]}</li>
                </ul>
            )}

            <Card.Footer>
                <Card.Title>{name}</Card.Title>
            </Card.Footer>
        </Card>
    );
};

export default Player;
