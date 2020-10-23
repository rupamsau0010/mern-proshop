import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children}) => {
    return (
        <Alert variant={variant} style={{ textAlign: "center" }}>
            {children}
        </Alert>
    )
}

Message.defaultProps = {
    varient: "info"
}

export default Message;
