let buttonText = 'show details'
const changeToggle = () => {
    console.log('button clicked')
    if (buttonText === 'show details') {
        buttonText = 'hide details'
    } else {
        buttonText = 'show details';
    }
    render();
 }
const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={changeToggle}>{buttonText}</button>
            {buttonText==='hide details' && <p>Hi these are the details you are seeing now</p>}
        </div>
    )
    ReactDOM.render(template, appRoot);
}
const appRoot= document.getElementById('app');

render();

