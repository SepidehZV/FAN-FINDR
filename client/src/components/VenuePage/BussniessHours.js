import React from 'react'

export default function BussniessHours() {
  return (
    <div className="conrinerforPadding">
     
        <div class="col">
          <div>Business Hours</div>
          <hr className="seprating" />
          <table class="table">
            <thead>
              <tr>
                <th >Day</th>
                <th >From</th>
                <th >To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th >Monday</th>
                <td>2:00 PM</td>
                <td>1:00 PM</td>

              </tr>
              <tr>
                <th >Tuesday</th>
                <td>2:00 PM</td>
                <td>1:00 PM</td>
              </tr>
              <tr>
                <th >Wednesday</th>
                <td>2:00 PM</td>
                <td>1:00 PM</td>              </tr>
              <tr>
                <th >Tursday</th>
                <td>2:00 PM</td>
                <td>1:00 PM</td>               </tr>
              <tr>
                <th >Friday</th>
                <td>2:00 PM</td>
                <td>1:00 PM</td>               </tr>
              <tr>
                <th >Saturday</th>
                <td>2:00 PM</td>
                <td>1:00 PM</td>               </tr>
              <tr>
                <th >Sunday</th>
                <td>2:00 PM</td>
                <td>1:00 PM</td>               </tr>
            </tbody>
          </table>

        </div>
    </div>
  )
}
