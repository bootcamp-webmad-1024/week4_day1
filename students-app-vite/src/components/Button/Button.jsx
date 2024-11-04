import './Button.css'

const Button = ({ content }) => {

    return (
        <div className="Button">
            <button>{content}</button>
        </div>
    )
}

export default Button