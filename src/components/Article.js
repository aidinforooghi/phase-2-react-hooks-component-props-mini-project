import React from "react";

function Article({ title, date, preview }) {
    const defaultDate = "January 1, 1970";

    const renderMinutesToRead = (minutes) => {
        if (minutes < 30) {
            const coffeeCups = Math.ceil(minutes / 5);
            const coffeeEmoji = "☕️";
            const coffeeCupsEmoji = coffeeEmoji.repeat(coffeeCups);
            return `${coffeeCupsEmoji} ${minutes} min read`;
        } else {
            const bentoBoxes = Math.ceil(minutes / 10);
            const bentoBoxEmoji = "🍱";
            const bentoBoxesEmoji = bentoBoxEmoji.repeat(bentoBoxes);
            return `${bentoBoxesEmoji} ${minutes} min read`;
        }
    };

    return (
        <article>
            <h3>{title}</h3>
            <small>{date ? date : defaultDate}</small>
            <p>{preview}</p>
            <p>{renderMinutesToRead(15)}</p>
        </article>
    );
}

export default Article;
