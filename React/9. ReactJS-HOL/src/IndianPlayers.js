const IndianTeam = [
    "Sachin1",
    "Dhoni2",
    "Virat3",
    "Rohit4",
    "Yuvaraj5",
    "Raina6"
];


export function OddPlayers() {

    const [first, , third, , fifth] = IndianTeam;

    return (
        <div>
            <li>First : {first}</li>
            <li>Third : {third}</li>
            <li>Fifth : {fifth}</li>
        </div>
    )
}


export function EvenPlayers() {

    const [, second, , fourth, , sixth] = IndianTeam;

    return (
        <div>
            <li>Second : {second}</li>
            <li>Fourth : {fourth}</li>
            <li>Sixth : {sixth}</li>
        </div>
    )
}


function IndianPlayers() {

    const T20Players = [
        "First Player",
        "Second Player",
        "Third Player"
    ];

    const RanjiPlayers = [
        "Fourth Player",
        "Fifth Player",
        "Sixth Player"
    ];

    const mergedPlayers = [
        ...T20Players,
        ...RanjiPlayers
    ];

    return (
        <ul>
            {
                mergedPlayers.map((player) =>
                    <li key={player}>
                        Mr. {player}
                    </li>
                )
            }
        </ul>
    )
}

export default IndianPlayers;