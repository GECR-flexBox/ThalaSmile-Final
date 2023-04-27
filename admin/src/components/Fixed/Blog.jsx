import React, { useState } from "react";
import "../../Css/Contact.css";
import "../../Css/EventForm.css";
import FestivalIcon from "@mui/icons-material/Festival";
import FestivalOutlinedIcon from "@mui/icons-material/FestivalOutlined";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
const Blog = () => {

  const [authorName, setAuthorName] = useState("")
  const [blogTitle, setBlogTitle] = useState("")
  const [blogPoster, setbBlogPoster] = useState("")
  const [blogDesc, setBlogDesc] = useState("")

  return (
    <div>
      <header className="event-sec">
        <div className="e-title">
          Add
          <span id="golden"> New </span>
          Blog
        </div>
      </header>
      <div className="message">
        <form action="" className="contactus">
          <div className="input">
            <label className="icon">
              <FestivalOutlinedIcon />
            </label>
            <input type="text" className="name" placeholder="Author Name" onChange={(e) => {
              setAuthorName(e.target.value)
            }} />
          </div>
          <div className="input">
            <label className="icon">
              <FestivalOutlinedIcon />
            </label>
            <input type="text" className="title" placeholder="Blog Title" onChange={(e) => {
              setBlogTitle(e.target.value)
            }}/>
          </div>

          <div className="input">
            <label className="icon">
              <FestivalIcon />
            </label>
            <div className="nn2">
              <div className="tx">Upload Blog Poster </div>
              <input type="file" name="" id="" onChange={(e) => {
              setbBlogPoster(e.target.value)
            }}/>
            </div>
          </div>

          <div className="inmsg">
            <label className="icon msicon">
              <DescriptionRoundedIcon />
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="msg"
              placeholder="Blog Description"
              onChange={(e) => {
                setBlogDesc(e.target.value)
              }}
            />
          </div>
          <div className="forbtn">
            <div className="btn">Add Blog</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Blog;
