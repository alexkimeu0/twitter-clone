import React from "react";

import SideBarOption from "./SideBarOption";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import "./SideBar.css";

function SideBar() {
	return (
		<div className="sidebar">
			{/* Twitter icon */}
			<TwitterIcon />

			{/* SideBarOption */}
			<SideBarOption active Icon={HomeIcon} text="Home" />
			<SideBarOption Icon={SearchIcon} text="Explore" />
			<SideBarOption Icon={NotificationsNoneIcon} text="Notifications" />
			<SideBarOption Icon={MailOutlineIcon} text="Messages" />
			<SideBarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
			<SideBarOption Icon={ListAltIcon} text="Lists" />
			<SideBarOption Icon={PermIdentityIcon} text="Profile" />
			<SideBarOption Icon={MoreHorizIcon} text="More" />

			{/* Tweet - Button */}
		</div>
	);
}

export default SideBar;