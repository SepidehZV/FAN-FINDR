import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function NumberOfFavouritesForEvent(props) {
  
  const [chartData, setChartData] = useState({});

  const chart = (ev_id) => {
    let faveCount = [];
    let days = [];
    axios
      .get(`http://localhost:3001/api/events/${ev_id}`)
      .then(res => {
        for (const event of res.data) {
          faveCount.push(parseInt(event.favourites_number));
          days.push(parseInt(event.day.substring(8, 10)));
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
  };
  
  const clickAction=(id) => {
    console.log({id});
    chart(id)
  }
  const eventList = props.events.map((ev) =>
  <li class="dropdown-item" key={ev.event_name} event_id ={ev.event_id} onClick={() => clickAction(ev.event_id)}>{ev.event_name} </li>
  
);
  // useEffect(() => {
  //   chart();
   
  // }, []);
  return (
    <div className="conrinerforPadding">
      <div class="col">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           choose an event
    </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id ="eventChart">
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
                    // type: 'time',
                    //   time: {
                    //     displayFormats: {
                    //       day: 'MMM DD'
                    //   },
                    gridLines: {
                      display: false
                    }
                  }
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
