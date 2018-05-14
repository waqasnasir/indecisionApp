import React from "react";

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    addOption= (e) => {
        e.preventDefault();
        let option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)
        if(!error){
            e.target.elements.option.value="";
        }
        this.setState(() => ({error}) )
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="option-error-message">{this.state.error} </p>}
                <form onSubmit={this.addOption} className="add-option">
                    <input type="text" name="option" className="add-option-input"/>
                    <button className="button"> Add Option</button>
                </form>
            </div>

        )
    }
}

