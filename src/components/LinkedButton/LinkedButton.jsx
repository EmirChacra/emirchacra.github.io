import './LinkedButton.css';

function LinkedButton(props) {
    const { text, color = 'text-purple', href } = props;
    return (
        <a href={href} className={'button ' + color}>{text}</a>
    );
}

export default LinkedButton;