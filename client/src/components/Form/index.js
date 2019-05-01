import React from "react";
import "./styles.css";
// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function TextArea(props) {
    return (
        <div className="form-group">
            <textarea className="form-control" rows="20" {...props} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button
            {...props}
            style={{ justifyContent:"center", alignItems: "center", textAlign: "center", marginBottom: 10, width: "100%" }}
            className="btn btn-success"
            placeholder="submit"
        >
            Submit {props.children}
        </button>
    );
}
