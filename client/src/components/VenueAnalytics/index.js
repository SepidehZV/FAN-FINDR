import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const VenueAnalytics = () => {
  const [chartData, setChartData] = useState({});
  const [favourite, setFavourite] = useState([]);

  const chart = () => {
    let totalfav = [];
    const days =[];
    axios
      .get("http://localhost:3001/api/favouriteEvents")
      .then(res => {
        console.log(res.data);
        for (const dataObj of res.data) {
          // setState(prev => ({ ...prev, user_id: res.data.id }))
          totalfav.push(parseInt(dataObj.venues_id));

        }
        setChartData({
          labels: days,
          datasets: [
            {
              label: "favourite",
              data: totalfav,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(totalfav);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div class="row1 mb-1">
      <div class="col-md-12">
        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="analytics">
            <h1>favourite</h1>
            <div>
              <Line
                data={chartData}
                options={{
                  responsive: true,
                  title: { text: "Analytics", display: true },
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          autoSkip: true,
                          maxTicksLimit: 10,
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
                    ]
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueAnalytics;
