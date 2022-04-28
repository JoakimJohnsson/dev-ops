import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../IconLink";
import {faExternalLinkAlt, faDatabase, faServer} from "@fortawesome/free-solid-svg-icons";
import TriIcons from "../../TriIcons";

const ResourcesDatabasesTabPane = () => {
    return (
        <Tab.Pane eventKey="databases">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Databases</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={[faDatabase]} />
                    <h3>Firebase</h3>
                    <p>Firebase helps you build and run successful apps. It's backed by Google and loved by app development teams - from
                        startups to global enterprises.</p>
                    <IconLink link={"https://firebase.google.com/"} text={"Firebase"}
                              icon={faExternalLinkAlt} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={[faServer]} />
                    <h3>Supabase</h3>
                    <p>Create a backend in less than 2 minutes. Start your project with a Postgres Database, Authentication, instant APIs,
                        realtime subscriptions and Storage.</p>
                    <IconLink link={"https://supabase.io/"} text={"Supabase"}
                              icon={faExternalLinkAlt} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default ResourcesDatabasesTabPane;
