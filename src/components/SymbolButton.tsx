import "../styles/ProfileStyle.css"

interface ButtonProps {
    imageName: string;
    onClick: () => void;
}

const SymbolButton = (props: ButtonProps): JSX.Element => {
    return (
        <button className="icon-button" onClick={ props.onClick }>
            <img src={`src/assets/${props.imageName}.png`} alt="" className="icon"/>
        </button>
    )
}

export default SymbolButton;