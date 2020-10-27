import React from "react";
import { Bar, StyledWelcomeLoader, LoaderDiv } from "./StyledComponents.js";
import bookLogo from '../Icons/open-book.svg';
import musicLogo from '../Icons/music.svg';
import movieLogo from '../Icons/movie.svg';


export const WelcomeLoader = (props) => {
    return (
        <LoaderDiv>
            <span>
                Search for your favourite songs, audiobooks, movies.
            </span>
            <StyledWelcomeLoader className="welcome-loader-animation">
                <img className="book" alt="book" src={bookLogo} height={100} width={100}/>
                <img className="music" alt="book" src={musicLogo} height={100} width={100}/>
                <img className="movie" alt="book" src={movieLogo} height={100} width={100}/>
            </StyledWelcomeLoader>
        </LoaderDiv>
    );
}