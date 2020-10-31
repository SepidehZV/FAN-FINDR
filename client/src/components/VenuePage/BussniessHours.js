import React from 'react'

export default function BussniessHours(props) {
  if (props.hours[0]) {
    const hours = props.hours.map(e => {
      return (
        <tr>
          <th >{e.day}</th>
          <td>{e.open_time} </td>
          <td>{e.close_time}</td>

        </tr>
      );
    })
    return (
      <div className="conrinerforPadding">

        <div class="col">
          <h3>Business Hours</h3>
          <hr className="seprating" />
          <table class="table">
            <thead>
              <tr>
                <th >Day</th>
                <th >From</th>
                <th >To</th>
              </tr>
            </thead>
            {hours}
            <tbody>

            </tbody>
          </table>

        </div>
      </div>
    )
  } else {
    const days = ['Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => {
      return (
        <tr>
          <th >{day}</th>
          <td>00:00 </td>
          <td>00:00</td>

        </tr>
      );
    })

    return (
      <div className="conrinerforPadding">

        <div class="col">
          <h3>Business Hours</h3>
          <hr className="seprating" />
          <table class="table">
            <thead>
              <tr>
                <th >Day</th>
                <th >From</th>
                <th >To</th>
              </tr>
            </thead>
            {days}
            <tbody>

            </tbody>
          </table>

        </div>
      </div>
    )
  }


}
