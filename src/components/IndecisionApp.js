import React from "react";
import Header from "./Header"
import AddOption from "./AddOption"
import Action from "./Action";
import Options from "./Options"
import OptionModal from "./OptionModal"


export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options,
        optionSelected: undefined
    }

    handDeleteAll = () => {
        this.setState(() => ({options: []}))
    }


    handleSingleDelete = (optionToRemove) => {
        this.setState((prevState) => (
            {
                options: prevState.options.filter((option) => (optionToRemove!==option))
            }))
    }
    closeModal = () => {
        this.setState(()=> ({optionSelected:undefined}))
    }

    handlePickOption = () => {
        let index = Math.floor(Math.random() * this.state.options.length);
        this.setState(()=>({optionSelected:this.state.options[index]}))
    }

    handleAddOption = (option) => {
        if (!option){
            return 'Please add a valid option'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'sorry this option already exist';
        }
        this.setState((prevState) => ({options: prevState.options.concat([option])}) )
    }

    render() {
        return (
            <div>
                <Header />

                <div className="container body">
                    <Action hasOptions={this.state.options.length != 0} handlePickOption={this.handlePickOption} />

                    <div className="widget">
                        <Options options={this.state.options} deleteAll={this.handDeleteAll} removeOption={this.handleSingleDelete}/>
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>

                    <OptionModal optionSelected={this.state.optionSelected} closeModal={this.closeModal} />
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log('component mount')
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({options:options}))
            }
        } catch (e){
            // do nothing at all
        }

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('component update')
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

}

IndecisionApp.defaultProps = {
    options: []
}
