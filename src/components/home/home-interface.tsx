import React from "react";

import NoPIC from "../../assets/images/nopic.png"

interface PlayerCardIA {
    image: any,
    username: string,
    level: number,
    title: string,
}

interface CrewCardIA {
    name: string,
    level: number,
    grade: string
}

interface ChallengeIA {
    name: string,
    desc: string,
    date: string
}

export const PlayerCard: PlayerCardIA[] = [
    { image: NoPIC, username: "Eeeexsarm", level: 99, title: "Don't be sad... be radiant" }
]

export const CrewCard: CrewCardIA[] = [
    { name: "Miaouw", level: 12, grade: "Soldier" }
]

export const Challenge: ChallengeIA[] = [
    { name: "Kill 2.000 players", desc: "You must kill 2.000 players", date: "7 days left" }
]