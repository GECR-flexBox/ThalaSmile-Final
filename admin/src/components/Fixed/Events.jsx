import React, { useContext, useState,useEffect } from "react";
import Tilt from "react-parallax-tilt";
import "../../Css/Event.css";
const Events = () => {
  const [events,setEvents]=useState([]);
  const backend = "http://localhost:3001"
  const getEvents = async ()=>{
    const res = await fetch(`${backend}/getevents/0`,{method:"GET"});
    const evnt = await res.json();
    setEvents(evnt.events);
  }
  const deleteEvent = async (id)=>{
    if(!window.confirm("are you want to delete this event?")){
      return;
    }
    const res = await fetch(`${backend}/deleteevent/${id}`,{method:"DELETE"});
    const dlt = await res.json();
    if(dlt.status=="ok"){
      let newdt =[];
      events.forEach(el => {
        if(el._id!=id){
          newdt.push(el);
        }
      });
      setEvents(newdt);
    }else{
      alert(dlt.status);
    }
  }
  useEffect(()=>{
    getEvents();
  },[])
  return (
    <div className="eee">
      <div>
        <header className="event-sec">
          <center>
            <div className="e-title">
              Current
              <span id="golden"> List Of </span>
              Events
            </div>
          </center>
        </header>
        <section>
          {events.length!=0 ? <div className="e-list">
            {events.map((ev)=>{
              return <Tilt
              glareEnable={true}
              glareColor="#ebe7ee47"
              glarePosition="all"
              tiltMaxAngleX="13"
              tiltMaxAngleY="4"
            >
              <div className="card">
                <div className="card-img">
                  <img src={ev.dp} />
                  <div className="time">
                    {ev.date}
                  </div>
                </div>
                <div className="card-info">
                  <div className="info-loc">{ev.address}</div>
                  <div className="info-t">{ev.name}</div>
                  <div className="info-des">
                    {ev.des}
                  </div>
                  <div className="join btn" onClick={(e)=>{
                    e.preventDefault();
                    deleteEvent(ev._id);
                  }}>Delete Event</div>
                </div>
              </div>
            </Tilt>
            })}
            
          </div> : <p style={{color:'blue'}}>Loading...</p> }
        </section>
      </div>
    </div>
  );
};

export default Events;
