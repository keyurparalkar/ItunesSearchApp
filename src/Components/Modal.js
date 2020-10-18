import React, {useState} from "react";
import { StyledModal, StyledDescription } from "./StyledComponents.js";

export const Modal = (props) => {
    const [text, setText] = useState(props.contentDescription);
    const [count, setCount] = useState(0);
    const [overflow, setOverflow] = useState('hidden')

    const showHideClass = props.show ? "modal display-block" : "modal display-none";
    console.log(overflow);
    return (
        <StyledModal className={showHideClass}>
            <div className="main-model">
                {props.children}

                <div className="modal-description">
                    <h1>{props.trackName}</h1>
                    <h3>{props.artistName}</h3>

                    <span> ({props.songType})</span>
                    <StyledDescription overflow={overflow}> {
                        text.length > 256 && count ===0?
                            <>
                                <p>{text.slice(0, 256)}</p>
                                <button onClick={()=>{setCount(1); setOverflow('scroll')}}>a</button>
                            </>
                            : text
                        }
                    </StyledDescription>
                </div>
                <button className="closeButton" onClick={props.closeModal}>X</button>
            </div>
        </StyledModal>
    );
}