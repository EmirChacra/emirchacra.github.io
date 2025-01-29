import './LinkedButton.css';

function LinkedButton({text , color = 'text-purple'}) {
  
    return ( 
        <a className={'button ' + color }>{text}</a>
     );
}

export default LinkedButton;