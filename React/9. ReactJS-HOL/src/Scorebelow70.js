function Scorebelow70(props) {

    let players70 = props.players.filter(
        (item) => item.score <= 70
    );

    return (
        <ul>
            {
                players70.map((item) =>
                    <li key={item.name}>
                        Mr. {item.name} {item.score}
                    </li>
                )
            }
        </ul>
    )
}

export default Scorebelow70;