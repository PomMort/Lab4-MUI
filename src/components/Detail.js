import { useParams } from "react-router-dom";
import { Films } from "../shared/ListOfFilm";
import React from "react";
import { Card, Icon } from "react-materialize";
import { useState } from "react";
import ModalCase from "./ModalCase";

export default function Detail() {
    const [isOpen, setIsOpen] = useState(false);
    const userName = useParams();
    const f = Films.find(obj => {
        return obj.id == userName.id;
    });
    let cost = f.cost.toLocaleString();
    return (
        <div className="detail-container">
            <Card>
                <div className="product-poster">
                    <div className="product-tumb">
                        <div className="badge">{f.title}</div>
                        <img src={`../${f.img}`} alt='' />
                    </div>
                </div>

                {isOpen && <ModalCase setIsOpen={setIsOpen} film={f} />}
                <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                    <Icon>ondemand_video</Icon>
                </a>
                <div className="product-details">
                    <div className="product-price">Ticket value: ${cost}</div>
                    <p className="product-bottom-details">{f.info}</p>
                </div>
            </Card>
        </div>
    )
}