import React from "react";
import { Link } from "react-router-dom";

function AlbumItem() {
  return (
    <>
      <div className="w-full flex gap-4">
        <img
          alt=""
          src={require("../assets/images/Tâm hồn của đá.png")}
          className="w-1/4"
        ></img>
        <div className="w-3/4 flex flex-col justify-end gap-1">
          <p className="text-xl">The Soul of Rock - Tâm Hồn của Đá (2002)</p>
          <p className="text-md w-full overflow-paragraph">
            The Soul of Rock (English title: The Soul of Rock) is the debut
            studio album by Vietnamese rock band Tuong Tuong, released on
            February 3, 2002 by Hanoi Audiovisual Center. The album collects 10
            of the most successful songs of the Wall, some of which have become
            'gut songs' among students - the band's growth cradle. Although from
            the first demo recorded in June 1999 to the official recording, it
            took about a year because of lack of money to make. One year after
            the recording, after many knocks on the door of the outlets
            distributed throughout the North and the South, finally, "Soul of
            the Rock" was officially born. All production is actually done by
            the band members themselves.
          </p>
          <Link to="/albumdetail" className="inline">
            <p className="underline">Read more...</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AlbumItem;
