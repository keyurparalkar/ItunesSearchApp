import React from "react";
import { StyledCard, StyledImage } from "./StyledComponents.js";
import {Modal} from "./Modal.js";

const Tile = (props) => {
    const songDetails = props.data;
    const imgUrlStrip = songDetails.artworkUrl100.split('/');
    const imgSize = imgUrlStrip.pop();
    const highRezImgUrl = [...imgUrlStrip, `640x480bb${imgSize.split('bb')[1]}`].join('/');

    return (

        <StyledCard animationDelay={props.animationDelay}>
            <span>
                <StyledImage alt={songDetails.trackName} src={highRezImgUrl} width={150} height={150} />
            </span>
            
                <span>{songDetails.trackName ? songDetails.trackName : songDetails.collectionCensoredName}</span>
                <div>
                <span>{songDetails.artistName}</span>
                    
                     <span> ({(() => {
                        if (songDetails.wrapperType === "track") {
                            return songDetails.kind;
                        } else if (songDetails.wrapperType === "audiobook") {
                            return songDetails.wrapperType;
                        }
                    })()})</span> 
                    
                </div>
                <Modal/>

        </StyledCard>
    )
};

export default Tile;