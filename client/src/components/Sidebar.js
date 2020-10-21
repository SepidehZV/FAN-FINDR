import React from 'react';
import './Sidebar.scss';

function Sidebar(props) {

    return (
        
        <section className="sider">
            <div className="row">
                <div className="col-3">
                    <div className="nav flex-column " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Main</a>
                        <hr className="seprating-line" />
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Events</a>

                    </div>
                </div>

            </div>
        </section>

    );
}

export default Sidebar;