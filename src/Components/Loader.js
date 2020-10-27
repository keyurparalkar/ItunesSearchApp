import React from "react";
import { Bar, StyledWelcomeLoader } from "./StyledComponents.js";
import bookLogo from '../Icons/open-book.svg';
import musicLogo from '../Icons/music.svg';
import movieLogo from '../Icons/movie.svg';

export const WelcomeLoader = (props) => {
    return (
        <div>
            <span>
                Search for your favourite songs, audiobooks, movies.
                
            </span>
            <StyledWelcomeLoader imgUrls={[bookLogo, musicLogo, movieLogo]} className="welcome-loader-animation">
                <img className="book" alt="book" src={bookLogo} height={60} width={60}/>
                <img className="music" alt="book" src={musicLogo} height={60} width={60}/>
                <img className="movie" alt="book" src={movieLogo} height={60} width={60}/>
            </StyledWelcomeLoader>
        </div>
    );
}