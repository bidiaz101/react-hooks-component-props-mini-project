import React from "react"
import Article from "./Article"

function ArticleList({posts}) {

    const articleArr = posts.map(postObj => {
        return <Article key={postObj.id} title={postObj.title} date={postObj.date} preview={postObj.preview} />
    })

    return (
        <main>
            {articleArr}
        </main>
    )
}

export default ArticleList