import React from "react";
import { StyledCard } from "./StyledComponents.js";

const Tile = (props) => (
    <StyledCard>
        <span><img alt={props.data.trackName} src={props.data.artworkUrl100} /></span>
        <span>{props.data.trackName}</span>
        <span>{props.data.kind}</span>
        <span>{props.data.artistName}</span>
    </StyledCard>
);

export default Tile;