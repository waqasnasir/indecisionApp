import React from "react";
import Option from "./Option"
const Options = (props) => {

    return (
        <div>
            <div className="widget-header">
                <p className="widget-header__title">Here are your Options</p>
                <button
                    className="button--link"
                    onClick={props.deleteAll}
                >
                    Remove All
                </button>
            </div>
            {props.options.length ===0 && <p className="widget-message">Please add option to get started</p>}
            <ol>
                {
                    props.options.map((option) => (
                        <Option
                            key={option}
                            option={option}
                            removeOption={props.removeOption}
                        />
                    ))
                }
            </ol>



        </div>
    )
}
export default Options;