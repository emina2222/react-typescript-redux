import "./ProfileStyle.css"

interface ButtonProps {
    imageName: string;
}

const SymbolButton = (props: ButtonProps): JSX.Element => {
    return (
        <button className="icon-button">
            <img src={`src/assets/${props.imageName}.png`} alt="" className="icon"/>
        </button>
    )
}

export default SymbolButton;