import React from "react";

import { data } from "../helper/data";
import { Col, Container, Row } from "react-bootstrap";
import Player from "./Player";

const CardContainer = () => {
    // console.log(data)
    return (
        <>
            {/* INPUT acilacak */}

            <Container className="card-container">
                <Row>
                    {data.map((player) => (
                        <Col key={player.name}>
                            <Player {...player}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default CardContainer;
