import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../IconLink";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import TriIcons from "../../TriIcons";

const ResourcesMiscTabPane = () => {
    return (
        <Tab.Pane eventKey="misc">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Miscellaneous</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["question"]} />
                    <h3>Can I use?</h3>
                    <p>Browser support tables for modern web technologies.</p>
                    <IconLink link={"https://caniuse.com/"} text={"Can I use?"}
                              icon={faExternalLinkAlt} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default ResourcesMiscTabPane;
