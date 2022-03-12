import React from "react"

import { PlayerCard } from './home-interface';
import { CrewCard } from "./home-interface";
import { Challenge } from "./home-interface";
import Nav from "../nav/nav-main";
import Footer from "../footer/footer-main";
import { br } from "../../index";

import "./styles.scss";

const Home: React.FC = () => {
    const getPlayerCard = () => {
        return PlayerCard.map((content) => {
            return <div className="card"><img src={content.image} className="image" height="64" />
            <a className="left"><a className="rank">{content.level}</a> <i className="bi bi-arrow-right-short" style={{fontSize: "1.2vh"}} /> {content.username}</a></div>
        })
    }

    const getPlayersWaitingInLobby = () => {
        let playerReady; let maxPlayer;
        return playerReady + " / " + maxPlayer
    }

    const getChallengeCard = () => {
        return Challenge.map((content) => {
            return <div className="card">
            <span className="title">Challenge</span><hr />
            <div className="challenge-list" style={{whiteSpace: "pre-line"}}>
                <span className="name">{content.name}</span>
                {`<br/>`.split("<br/>").join("\n")}
                <span className="desc">{content.desc}</span>
            </div>
            </div>
        })
    }

    return (
        <div className="home">
            <Nav />

            <div className="home-left">
                <div className="home-card">{getPlayerCard()}</div>

                <div className="home-xp_bar">
                    <div className="xp_bar" style={{width: "71.39%"}} />
                </div>
                
                <div className="home-title" style={{whiteSpace: "pre-line"}}>
                    <a style={{fontSize: "22.5px"}}>{getPlayersWaitingInLobby()} Waiting in Lobby</a>
                    {`<br/>`.split("<br/>").join("\n")}
                    <span>Solo 1 / 1 Max</span>
                </div>

                <div className="gamemode-card" style={{whiteSpace: "pre-line"}}>
                    <div className="mode">Battle royale</div>
                    <div className="desc">Compete against up to 100 players. The last player alive wins the game.</div>
                    {`<br/>`.split("<br/>").join("\n")}{`<br/>`.split("<br/>").join("\n")}
                    <button className="button">Launch</button>
                </div>
            </div>

            <div className="home-right">
                <div className="challenge-card">{getChallengeCard()}</div>
            </div>

            <Footer />
        </div>
    )
}

export default Home;