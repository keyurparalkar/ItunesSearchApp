import React from "react";
import {StyledModal} from "./StyledComponents.js";

export const Modal = (props) => {
    const showHideClass = props.show ? "modal display-block" : "modal display-none"
    return(
        <StyledModal className={showHideClass}>
            <div className="main-model">
                {props.children}
                <button className="closeButton" onClick={props.closeModal}>X</button>
            </div>
        </StyledModal>
    );
}