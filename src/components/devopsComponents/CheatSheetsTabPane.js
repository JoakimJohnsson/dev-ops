import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../IconLink";
import {faExternalLinkAlt, faCodeBranch, faUserAstronaut, faFileCode, faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import TriIcons from "../TriIcons";

const CheatSheetsTabPane = () => {
    return (
        <Tab.Pane eventKey="cheat-sheets-main">
            <div className="row article">
                <div className="col-12 col-md-8">
                    <h2>Cheat sheets and Best Practices</h2>
                    <p className="lead">
                        A cheat sheet is a concise set of notes used for quick reference. Cheat sheets were historically used by
                        students without an instructor or teacher's knowledge to cheat on a test or exam.
                    </p>
                    <p className="lead mb-5">
                        Best practices are a set of guidelines, ethics, or ideas that represent the most efficient or
                        prudent course of action in a given business situation.
                    </p>
                </div>
                <div className="row no-gutters">
                    <div className="tab-pane-card">
                        <TriIcons icons={[faCodeBranch]}/>
                        <h3>Git</h3>
                        <p>
                            Git is the free and open source distributed version control system that's responsible for
                            everything GitHub related that happens locally on your computer. This cheat sheet features the most
                            important and commonly used Git commands for easy reference.
                        </p>
                        <IconLink link={"https://education.github.com/git-cheat-sheet-education.pdf"} text={"Git cheat sheet"}
                                  icon={faExternalLinkAlt} external={true}/>
                        <IconLink link={"https://education.github.com/"} text={"Source: Github"}
                                  icon={faExternalLinkAlt} external={true}/>
                    </div>
                    <div className="tab-pane-card">
                        <TriIcons icons={[faUserAstronaut]}/>
                        <h3>Node package manager</h3>
                        <p>
                            npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line
                            client, also called npm, and an online database of public and paid-for private packages, called the npm registry.
                        </p>
                        <IconLink link={"https://devhints.io/npm"} text={"NPM cheat sheet"}
                                  icon={faExternalLinkAlt} external={true}/>
                        <IconLink link={"https://devhints.io/"} text={"Source: Devhints"}
                                  icon={faExternalLinkAlt} external={true}/>
                    </div>
                    <div className="tab-pane-card">
                        <TriIcons icons={[faFileCode]}/>
                        <h3>CSS</h3>
                        <p>
                            Great cheat sheet with links to MDN documentation.
                        </p>
                        <IconLink link={"https://adam-marsden.co.uk/css-cheat-sheet"} text={"CSS cheat sheet"}
                                  icon={faExternalLinkAlt} external={true}/>
                        <IconLink link={"https://adam-marsden.co.uk/"} text={"Source: Adam Marsden"}
                                  icon={faExternalLinkAlt} external={true}/>
                    </div>
                    <div className="tab-pane-card">
                        <TriIcons icons={[faLaptopCode]}/>
                        <h3>Naming</h3>
                        <p>
                            All you need to know about naming conventions and best practices in a convenient package.
                        </p>
                        <IconLink link={"https://github.com/kettanaito/naming-cheatsheet"} text={"Naming cheat sheet"}
                                  icon={faExternalLinkAlt} external={true}/>
                        <IconLink link={"https://github.com/kettanaito"} text={"Source: Artem Zakharchenko"}
                                  icon={faExternalLinkAlt} external={true}/>
                    </div>
                    <div className="tab-pane-card">
                        <TriIcons icons={[faFileCode]}/>
                        <h3>Bulletproof React</h3>
                        <p>
                            Everything you need to know about how to structure your project.
                        </p>
                        <IconLink link={"https://dev.to/texmeijin/bulletproof-react-is-a-hidden-treasure-of-react-best-practices-3m19"} text={"Bulletproof react article"}
                                  icon={faExternalLinkAlt} external={true}/>
                        <IconLink link={"https://github.com/alan2207/bulletproof-react"} text={"On github"}
                                  icon={faExternalLinkAlt} external={true}/>
                        <IconLink link={"https://github.com/alan2207"} text={"Source: Alan Alickovic"}
                                  icon={faExternalLinkAlt} external={true}/>
                    </div>
                    <div className="tab-pane-card">
                        <TriIcons icons={[faFileCode]}/>
                        <h3>JSX / React conditional rendering</h3>
                        <p>
                            Good advice on JSX conditionals.
                        </p>
                        <IconLink link={"https://thoughtspile.github.io/2022/01/17/jsx-conditionals/"} text={"JSX conditionals cheat sheet"}
                                  icon={faExternalLinkAlt} external={true}/>
                        <IconLink link={"https://thoughtspile.github.io/"} text={"Source: Vladimir Klepov"}
                                  icon={faExternalLinkAlt} external={true}/>
                    </div>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default CheatSheetsTabPane;
