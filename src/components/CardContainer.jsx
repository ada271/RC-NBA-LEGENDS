import React, { useState } from "react";

import { data } from "../helper/data";
import { Col, Container, Form, Row } from "react-bootstrap";
import Player from "./Player";

const CardContainer = () => {
    // console.log(data)

    const [arama, setArama] = useState("");

    // let filtrelenmisData = "";
    // filtrelenmisData = data.filter((a) => a.name.includes(arama));
    // console.log(filtrelenmisData)
    return (
        <>
            {/* INPUT acilacak */}

            <Form.Control
                className="w-50 m-auto"
                type="search"
                placeholder="Search Player..."
                onChange={(e) => setArama(e.target.value)}
            />

            <Container className="card-container my-4 p-3 rounded-4">
                <Row className="g-3">
                    {/* {filtrelenmisData.map((player) => ( */}
                    {data.filter((abc)=>abc.name.toLowerCase().includes(arama.toLocaleLowerCase())).map((player) => (
                        <Col md={6} lg={4} xl={3} key={player.name}>
                            <Player {...player} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default CardContainer;
