import React from "react";

import { data } from "../helper/data";
import { Col, Container, Row } from "react-bootstrap";
import Player from "./Player";

const CardContainer = () => {
    // console.log(data)
    return (
        <>
            {/* INPUT acilacak */}

            <Container className="card-container my-4 p-3 rounded-4">
                <Row className="g-3">
                    {data.map((player) => (
                        <Col md={6} lg={4} xl={3} key={player.name}>
                            <Player {...player}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default CardContainer;
