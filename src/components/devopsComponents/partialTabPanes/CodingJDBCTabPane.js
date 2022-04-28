import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../IconLink";
import {faExternalLinkAlt, faServer} from "@fortawesome/free-solid-svg-icons";
import TriIcons from "../../TriIcons";
import exJDBC01 from "../../../../src/assets/jdbc/exercises/01.pdf";
import slJDBC01 from "../../../../src/assets/jdbc/slides/01-jdbc_presentation.pdf";

const CodingJDBCTabPane = () => {
    return (
        <Tab.Pane eventKey="coding-jdbc">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>JDBC exercises</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={[faServer]} />
                    <h3>01 - JDBC</h3>
                    <IconLink link={slJDBC01} text={"Slide 01"}
                              icon={faExternalLinkAlt} external={true}/>
                    <IconLink link={exJDBC01} text={"Exercise 01"}
                              icon={faExternalLinkAlt} external={true}/>
                </div>

            </div>
        </Tab.Pane>
    );
}

export default CodingJDBCTabPane;
