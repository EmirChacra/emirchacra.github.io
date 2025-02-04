import './LinkedButton.css';

function LinkedButton(props) {
    const { link="#", text = "Button", color = "text-purple"} = props;

    return ( 
        <a href={link} target="_blank" className={'button ' + color }>{text}</a>
     );
}

export default LinkedButton;