import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../IconLink";
import {faExternalLinkAlt, faLowVision, faSignLanguage} from "@fortawesome/free-solid-svg-icons";
import TriIcons from "../../TriIcons";

const AccessibilityTutorialsTabPane = () => {
    return (
        <Tab.Pane eventKey="documentation">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Documentation</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={[faLowVision]}/>
                    <h3>Web Content Accessibility Guidelines (WCAG)</h3>
                    <p>
                        Web Content Accessibility Guidelines (WCAG) is developed through the W3C process in cooperation with
                        individuals and organizations around the world, with a goal of providing a single shared standard for web
                        content accessibility that meets the needs of individuals, organizations, and governments internationally.
                    </p>
                    <IconLink link={"https://www.w3.org/WAI/standards-guidelines/wcag/"} text={"WCAG Documentation"}
                              icon={faExternalLinkAlt} external={true}/>
                    <IconLink link={"https://www.w3.org/"} text={"Source: W3C - The Word wide web consortium"}
                              icon={faExternalLinkAlt} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={[faSignLanguage]}/>
                    <h3>Accessible Rich Internet Applications (WAI-ARIA)</h3>
                    <p>
                        Accessibility of web content requires semantic information about widgets, structures, and behaviors, in order
                        to allow assistive technologies to convey appropriate information to persons with disabilities. This
                        specification provides an ontology of roles, states, and properties that define accessible user interface
                        elements and can be used to improve the accessibility and interoperability of web content and applications.
                    </p>
                    <IconLink link={"https://www.w3.org/TR/wai-aria-1.1/"} text={"WAI-ARIA Documentation"}
                              icon={faExternalLinkAlt} external={true}/>
                    <IconLink link={"https://www.w3.org/"} text={"Source: W3C - The Word wide web consortium"}
                              icon={faExternalLinkAlt} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default AccessibilityTutorialsTabPane;
