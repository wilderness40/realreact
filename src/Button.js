import './Button.css'

function Button({children, handleClick}){ //props

 return <button className={`Button`} onClick={handleClick}>{children}</button>
}
export default Button
