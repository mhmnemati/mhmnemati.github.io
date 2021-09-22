import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Component = (props) => (
    <a
        style={{
            color: "inherit",
        }}
        href={props.href}
        target="_blank"
    >
        {props.text ? (
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={props.icon} />
        ) : (
            <FontAwesomeIcon
                style={{ margin: props.margin || 8 }}
                icon={props.icon}
                size={!props.text && "2x"}
            />
        )}
        {props.text}
    </a>
);

export default Component;
