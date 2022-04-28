import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

/**
 * A link paired with a fontawesome icon. Used as navigation link on page.
 */

const IconLink = ({className, link, text, icon, external}) => (
    external ?
        <a className={className} href={link} target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={icon}/><span className="ms-2">{text}</span></a>
        :
        <Link className={className} to={link}><FontAwesomeIcon icon={icon}/><span className="ms-2">{text}</span></Link>
);

export default IconLink;
