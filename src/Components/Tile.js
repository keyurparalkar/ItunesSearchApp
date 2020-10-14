import React from "react";
import { StyledCard, StyledImage} from "./StyledComponents.js";

const Tile = (props) => {
    const songDetails = props.data;
    const imgUrlStrip = songDetails.artworkUrl100.split('/');
    const imgSize = imgUrlStrip.pop();
    const highRezImgUrl = [...imgUrlStrip, `640x480bb${imgSize.split('bb')[1]}`].join('/');

    console.log('DElay = ',props.animationDelay)
    return (
        
        <StyledCard animationDelay = {props.animationDelay}>
            <span>
                <StyledImage alt={songDetails.trackName} src={highRezImgUrl} width={150} height={150}/>    
            </span>
            <span>{songDetails.trackName ? songDetails.trackName : songDetails.collectionCensoredName}</span>
            <span>{(() => {
                if (songDetails.wrapperType === "track") {
                    return songDetails.kind;
                } else if (songDetails.wrapperType === "audiobook") {
                    return songDetails.wrapperType;
                }
            })()}</span>
            <span>{songDetails.artistName}</span>

            {/* <span>{(() => {
                if (songDetails.wrapperType === "track") {
                    return songDetails.longDescription ? songDetails.longDescription.length > 10 ? songDetails.longDescription.slice(0, 5) : songDetails.longDescription.slice(0, songDetails.length - 1) : '';
                } else if (songDetails.wrapperType === "audiobook") {
                    return songDetails.description.length > 30 ? songDetails.description.slice(0,20) : songDetails.description.slice(0, songDetails.description.length -1);
                }
            })()}</span> */}
        </StyledCard>
    )
};

export default Tile;