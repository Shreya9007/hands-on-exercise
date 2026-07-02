import '../Stylesheets/mystyle.css';

const percentToDecimal = (decimal) => {
    return (decimal * 100).toFixed(2) + "%";
};

const calcScore = (total, goal) => {
    return percentToDecimal(total / goal);
};

export const CalculateScore = ({ Name, School, total, goal }) => (
    <div className="formatstyle">

        <h1 style={{ color: "brown" }}>
            Student Details
        </h1>

        <p>
            <b>Name:</b> {Name}
        </p>

        <p>
            <b>School:</b> {School}
        </p>

        <p>
            <b>Total:</b> {total} Marks
        </p>

        <p>
            <b>Goal:</b> {goal}
        </p>

        <p>
            <b>Score:</b> {calcScore(total, goal)}
        </p>

    </div>
);