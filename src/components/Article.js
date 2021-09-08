import React from "react"

function Article({title, date="January 1, 1970", preview, minutes}) {
    function emojiList(minutes){
        let interval
        let emoji
        let emojis = ""
        if(minutes<30){
            interval = 5
            emoji = "☕️"
        } else {
            interval = 10
            emoji = "🍱"
        }
        for(let i=0; i<minutes; i+=interval){
            emojis += emoji
        }
        return emojis
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date + " | " + emojiList(minutes) + minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article