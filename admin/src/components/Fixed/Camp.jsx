import React, { useState } from "react";
import "../../Css/Contact.css";
import "../../Css/EventForm.css";
import FestivalIcon from "@mui/icons-material/Festival";
import FestivalOutlinedIcon from "@mui/icons-material/FestivalOutlined";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
const Camp = () => {
  const [date, setDate] = useState("")
  const [eventPoster, setEventPoster] = useState("")
  const [location, setLocation] = useState("")
  const [eventDesc, setEventDesc] = useState("")

  return (
    <div>
      <header className="event-sec">
        <div className="e-title">
          Add
          <span id="golden"> New </span>
          Blood Donation Camp
        </div>
      </header>
      <div className="message">
        <form action="" className="Campus">
          <div className="input">
            <label className="icon">
              <DateRangeRoundedIcon />
            </label>
            <input type="date" className="name" placeholder="" onChange={(e) => {
                setDate(e.target.value)
              }} />
          </div>
          <div className="input">
            <label className="icon">
              <FestivalIcon />
            </label>
            <div className="nn2">
              <div className="tx">Upload Event Poster </div>
              <input type="file" name="" id="" onChange={(e) => {
                setEventPoster(e.target.value)
              }}/>
            </div>
          </div>
          <div className="input">
            <label className="icon">
              <AddLocationAltRoundedIcon />
            </label>
            <input type="text" className="name" placeholder="Event Location" onChange={(e) => {
                setEventPoster(e.target.value)
              }} />
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
              placeholder="Event Description"
              onChange={(e) => {
                setEventDesc(e.target.value)
              }}
            />
          </div>
          <div className="forbtn">
            <div className="btn" onClick={() => {
              console.log({date});
              console.log({eventPoster});
              console.log({location});
              console.log({eventDesc});
            }}>Add Camp</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Camp;
