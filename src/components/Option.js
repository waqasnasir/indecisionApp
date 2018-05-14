import React from "react";

const Option = (props) => {
    return (
        <div>
            <div className="option">
                <li>{props.option}</li>
                <button
                    className="button--link"
                    onClick={
                        (e) => {
                            props.removeOption(props.option)
                        }
                    }
                >
                    Remove
                </button>
            </div>

        </div>
    )
}
export default Option;