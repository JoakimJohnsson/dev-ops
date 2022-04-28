import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../IconLink";
import {faExternalLinkAlt, faCodeBranch, faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import TriIcons from "../../TriIcons";

const CodingWorkflowTabPane = () => {
    return (
        <Tab.Pane eventKey="coding-workflow">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Git</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={[faCodeBranch]}/>
                    <h3>Creating the perfect commit</h3>
                    <p>
                        In this post, we’re talking about what it takes to produce the “perfect” commit.
                    </p>
                    <IconLink link={"https://css-tricks.com/creating-the-perfect-commit-in-git/"} text={"Creating the perfect commit"}
                              icon={faExternalLinkAlt} external={true}/>
                    <IconLink link={"https://css-tricks.com"} text={"Source: CSS tricks"}
                              icon={faExternalLinkAlt} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={[faLaptopCode]}/>
                    <h3>Naming conventions</h3>
                    <p>
                        In this post, we’re talking about what it takes to produce the “perfect” commit.
                    </p>
                    <IconLink link={"https://css-tricks.com/creating-the-perfect-commit-in-git/"} text={"Creating the perfect commit"}
                              icon={faExternalLinkAlt} external={true}/>
                    <IconLink link={"https://css-tricks.com"} text={"Source: CSS tricks"}
                              icon={faExternalLinkAlt} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default CodingWorkflowTabPane;
