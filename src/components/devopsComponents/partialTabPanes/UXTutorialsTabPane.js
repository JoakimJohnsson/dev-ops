import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../IconLink";
import {faExternalLinkAlt, faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import TriIcons from "../../TriIcons";

const AccessibilityTutorialsTabPane = () => {
    return (
        <Tab.Pane eventKey="ux-tutorials">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Tutorials</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={[faGraduationCap]} />
                    <h3>Basics of UX</h3>
                    <p>This article introduces a workflow that can help teams, products, startups and companies create a robust and meaningful
                        process for developing a better user experience for their customers. You could use different parts of the process
                        separately but they ideally work best as a series of steps.</p>
                    <IconLink link={"https://developers.google.com/web/fundamentals/design-and-ux/ux-basics"} text={"Basics of UX"}
                              icon={faExternalLinkAlt} external={true}/>
                    <IconLink link={"https://developers.google.com/"} text={"Source: Google developers"}
                              icon={faExternalLinkAlt} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default AccessibilityTutorialsTabPane;
