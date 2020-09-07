import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";

import "./Post.css";

function Post({ displayName, handle, verified, text, image, avatar }) {
	return (
		<div className="post">
			<div className="post__avatar">
				<Avatar src="" />
			</div>
			<div className="post__body">
				<div className="post__header">
					<div className="post__headerText">
						<h3>
							Alex Kimeu{" "}
							<span className="post__headerSpecial">
								<VerifiedUserIcon className="post__badge" /> @alexkimeu0
							</span>
						</h3>
					</div>

					<div className="post__headerDescription">
						<p>I challenge you to make it count.</p>
					</div>
				</div>

				<img
					src="https://lizmish.files.wordpress.com/2020/09/b4f783e5810698eaea281c6e55b3d57b3215096921786724204.jpg"
					alt=""
				/>

				<div className="post__footer">
					<ChatBubbleOutlineIcon fontSize="small" />
					<RepeatIcon fontSize="small" />
					<FavoriteBorderIcon fontSize="small" />
					<PublishIcon fontSize="small" />
				</div>
			</div>
		</div>
	);
}

export default Post;
