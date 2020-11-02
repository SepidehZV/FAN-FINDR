import React, { useContext, useState } from "react";
import useSportTeam from "../../hooks/useSportTeam";
import StateContext from "../../StateContext";

export default function Form(props) {
  // const { stateSportTeam } = useSportTeam();
  const state = useContext(StateContext);
  const [event_name, setEventName] = useState(props.event_name);
  const [event_description, setEventDescription] = useState(
    props.event_description
  );
  const { stateSportTeam } = useSportTeam();

  const [offers, setOffers] = useState(props.offers);
  const [selectedTeamId, setSelectedTeamId] = useState(props.team_id);

  const teamList = stateSportTeam.teams.map((team) => (
    <li
    className="dropdown-item"
      key={team.team_name}
      team_id={team.id}
      onClick={() => setSelectedTeamId(team.id)}
    >
      {team.team_name}
    </li>
  ));

  return (
    <div className="row1">
      <div className="card">
        <img
          className="card-img-top"
          src="https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.44.32-PM-1024x148.png"
          alt="Card image cap"
        />
        <div className="card-body">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="VenueName">Game Name</label>
              <input
                type="text"
                className="form-control"
                placeholder=" Game Name"
                value={event_name}
                onChange={(e) => setEventName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="VenueName">Description</label>
              <textarea
                type="text"
                className="form-control"
                laceholder="item_description"
                value={event_description}
                onChange={(e) => setEventDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="VenueName">Offers</label>
              <input
                type="text"
                className="form-control"
                placeholder="Offers if any"
                value={offers}
                onChange={(e) => setOffers(e.target.value)}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <div clclassNameass="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  choose Team
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {teamList}
                </div>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div className="edit-and-delete">
              <div
                className="save"
                onClick={() => {
                  props.onSave(
                    event_name,
                    event_description,
                    offers,
                    selectedTeamId,
                    props.venue_id,
                    props.id
                  ).then(res => props.transition('SHOW'));
                }}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-check-circle"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                  />
                </svg>{" "}
              </div>
              <div className="canel" onClick={() => props.onCancel()}>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-right-circle-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
