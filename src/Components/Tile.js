import React from "react";

const Tile = (props)=>(
    <li>
        <span>{props.data.trackName}</span>
        <span>{props.data.kind}</span>
<span>{props.data.artistName}</span>
<span><img alt={props.data.trackName} src={props.data.artworkUrl100}/></span>
    </li>
);

export default Tile;