import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../IconLink";
import {faExternalLinkAlt, faServer} from "@fortawesome/free-solid-svg-icons";
import TriIcons from "../../TriIcons";
import roadToReact from "../../../../src/assets/react/the-road-to-react.pdf";

const CodingReactTabPane = () => {
    return (
        <Tab.Pane eventKey="coding-react">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>React tutorials and exercises</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={[faServer]} />
                    <h3>Road to react</h3>
                    <IconLink link={roadToReact} text={"PDF"}
                              icon={faExternalLinkAlt} external={true}/>
                </div>

            </div>
        </Tab.Pane>
    );
}

export default CodingReactTabPane;
