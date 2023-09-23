import React from "react";
import "./timeline.scss";

const Timeline = () => {
  return (
    <div className="container_box timeline_container">
      <h2>Timeline</h2>
      <p className="timeline_intro">
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>

      <div className="timelines">
        <div className="timeline">
          <div className="timeline_title col-12 col-lg-5">
            <h3 data-animation="header">Hackathon Announcement</h3>
            <p>
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>
          <div className="col-12 col-lg-2 timeline_number">
            <span>1</span>
          </div>
          <p className="timeline_date col-12 col-lg-5">November 18, 2023</p>
        </div>

        <div className="timeline">
          <div className="timeline_title col-12 col-lg-5">
            <h3 data-animation="header">Teams Registration begins</h3>
            <p>
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
          </div>
          <div className="col-12 col-lg-2 timeline_number">
            <span>2</span>
          </div>
          <p className="timeline_date col-12 col-lg-5">November 18, 2023</p>
        </div>

        <div className="timeline">
          <div className="timeline_title col-12 col-lg-5">
            <h3
            // data-animation="header"
            >
              Teams Registration ends
            </h3>
            <p>Interested Participants are no longer Allowed to register</p>
          </div>
          <div className="col-12 col-lg-2 timeline_number">
            <span>3</span>
          </div>
          <p className="timeline_date col-12 col-lg-5">November 18, 2023</p>
        </div>

        <div className="timeline">
          <div className="timeline_title col-12 col-lg-5">
            <h3 data-animation="header">
              Announcement of the accepted teams and ideas
            </h3>
            <p>
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </div>
          <div className="col-12 col-lg-2 timeline_number">
            <span>4</span>
          </div>
          <p className="timeline_date col-12 col-lg-5">November 18, 2023</p>
        </div>

        <div className="timeline">
          <div className="timeline_title col-12 col-lg-5">
            <h3 data-animation="header">
              Getlinked Hackathon 1.0 Offically Begins
            </h3>
            <p>
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </div>
          <div className="col-12 col-lg-2 timeline_number">
            <span>5</span>
          </div>
          <p className="timeline_date col-12 col-lg-5">November 18, 2023</p>
        </div>

        <div className="timeline">
          <div className="timeline_title col-12 col-lg-5">
            <h3 data-animation="header">Demo Day</h3>
            <p>
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
          </div>
          <div className="col-12 col-lg-2 timeline_number">
            <span>6</span>
          </div>
          <p className="timeline_date col-12 col-lg-5">November 18, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
