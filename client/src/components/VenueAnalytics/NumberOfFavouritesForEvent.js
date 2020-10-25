import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

export default function NumberOfFavouritesForEvent(props) {
  const [chartData, setChartData] = useState({});
  const user= props.user;
  const venues = props.venues;
  // const getVenueByUserId =(user, venues) =>{
  //   const venue = venues.find((venue)=> venue.owner_id === user.id);
  //   return venue.id;
  // };
  // const venue_id = getVenueByUserId (user, venues);
  let eventList = props.events.map((ev) =>
        <a class="dropdown-item" href="#" key={ev.event_name}> {ev.event_name}</a>
      );
  const chart = () => {
    let faveCount = [];
    let days = [];
    axios
      .get(`http://localhost:3001/api/events/${props.event_id}`)
      .then(res => {
        // console.log(res);
        for (const event of res.data) {
          faveCount.push(parseInt(event.favourites_number));
          days.push(parseInt(event.day));
        }
        setChartData({
          labels: days,
          datasets: [
            {
              label: `Favourites for event `,
              data: faveCount,
              backgroundColor: ["rgba(23, 98, 167, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(faveCount, days);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="conrinerforPadding">
      <div class="col">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           choose an event
    </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {eventList}
          </div>
        </div>

        <div>
          <Line
            data={chartData}
            options={{
              responsive: true,
              title: { text: "Number Favs per day", display: true },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 1,
                      beginAtZero: true
                    },
                    gridLines: {
                      display: false
                    }
                  }
                ],
                xAxes: [
                  {
                    gridLines: {
                      display: false
                    }
                  }
                  // {
                  //   type: 'time',
                  //     time: {
                  //       displayFormats: {
                  //         day: 'MMM YYYY'
                  //     }
                  //     },
                  //   gridLines: {
                  //     display: false
                  //   }
                  // }
                ]
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
