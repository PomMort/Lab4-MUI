import React from "react";
// import { useState } from "react";
import { Films } from "../shared/ListOfFilm";
import { Link } from "react-router-dom";
import { Card, Container, Col, Row } from "react-materialize";
export default function FilmsDemo() {
    return (
        <Container>
            <Row className="row">
                {Films.map((film) => (
                    <Col>
                        <Card className="card-items">
                            <img src={film.img} alt='' />
                            <p><h5>{film.title}</h5></p>
                            <button className="button" style={{position: 'absolute', bottom: '15px'}}><Link className="inside-button" to={`detail/${film.id}`}>Detail</Link></button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
















    // const [film, setFilm] = useState([])
    // return (
    //     <div className="container">
    //         {Films.map((film) => (
    //             <div className="colunm">
    //                 <div className="card">
    //                     <img src={film.img} alt="" />
    //                     <h3>{film.title}</h3>
    //                     <p className="nation">{film.Nation}</p>
    //                     <Link to={`detail/${film.id}`}>
    //                         <p><button>Detail</button></p>
    //                     </Link>
    //                 </div>
    //             </div>
    //         ))}

    //         <div id="popup1" className="overlay">
    //             <div className="popup">
    //                 <image src={film.img} />
    //                 <h2>{film.title}</h2>
    //                 <a className="close" href="#">&times;</a>
    //                 <div className="content">
    //                     {film.info}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}