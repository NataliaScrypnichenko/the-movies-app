// Показує жанр у вигляді невеликої позначки.

import type {IGenre} from "../models/IGenre.ts";
import {useState} from "react";

const GenreBadge = () => {

    const [genre, setGenre] = useState<IGenre[]>([]);

    return (
        <div>
            <div>
                <button onClick={() => {
                    setGenre(genre);
                }}>Action
                </button>
                <button onClick={() => {
                }}>Adventure
                </button>
                <button onClick={() => {
                }}>Animation
                </button>
                <button onClick={() => {
                }}>Comedy
                </button>
                <button onClick={() => {
                }}>Crime
                </button>
                <button onClick={() => {
                }}>Documentary
                </button>
                <button onClick={() => {
                }}>Drama
                </button>
                <button onClick={() => {
                }}>Family
                </button>
                <button onClick={() => {
                }}>Family
                </button>
                <button onClick={() => {
                }}>Fantasy
                </button>
                <button onClick={() => {
                }}>History
                </button>
                <button onClick={() => {
                }}>Music
                </button>
                <button onClick={() => {
                }}>Romance
                </button>
                <button onClick={() => {
                }}>Science Fiction
                </button>
                <button onClick={() => {
                }}>TV Movie
                </button>
                <button onClick={() => {
                }}>Thriller
                </button>
                <button onClick={() => {
                }}>War
                </button>
                <button onClick={() => {
                }}>Western
                </button>
            </div>
        </div>
    );
};

export default GenreBadge;
