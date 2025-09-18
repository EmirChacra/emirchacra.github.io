import './LinkedButton.css';

function LinkedButton(props) {
    const { link="#", text = "Button", color = "text-purple"} = props;

    return ( 
        <div className='button-container'>
            <a href={link} target="_blank" className={'button ' + color }>{text}</a>
        </div>
     );
}

export default LinkedButton;