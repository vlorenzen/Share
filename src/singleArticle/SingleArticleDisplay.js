import React from 'react';
import 'firebase/firestore';
import SingleArticleWriteComment from './SingleArticleWriteComment'

const SingleArticleDisplay = ({ article, userID, articleID }) => {
	let articleContentCreateMarkup = () => {
		return {
			__html: article.content.replace(/(\r\n|\n|\r)/gm, '<br />')
		};
	};
	return (
		<div>
			<p className="post" dangerouslySetInnerHTML={articleContentCreateMarkup()} />
			{/* här kommer alla kommentarer
            <SingleArticleDisplayComments />
            */}
			<SingleArticleWriteComment
				userID={userID}
				articleID={articleID}
			/>
		</div>
	)
}

export default SingleArticleDisplay;
