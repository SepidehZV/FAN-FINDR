import React, { useState, useEffect, useContext } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import StateContext from '../../StateContext';

export default function NumberOfFavouritesForDay(props) {
  const [chartData, setChartData] = useState({});

/// i need the venue id 

  const chart = () => {
    let faveCount = [];
    let days = [];
    axios
      .get(`http://localhost:3001/api/favouriteEvents/${props.venue_id}`)
      .then(res => {
        // console.log(res);
        for (const dataObj of res.data) {
          faveCount.push(parseInt(dataObj.favourites_number));
          days.push(parseInt(dataObj.day.substring(8, 10)));
          // console.log(dataObj.day);
        }
        setChartData({
          labels: days,
          datasets: [
            {
              label: "Favourites",
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
    // console.log(faveCount, days);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="conrinerforPadding">
      <div class="col">
            <div >
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
