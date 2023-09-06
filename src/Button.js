
import './Button.css'

function Button({children}){ //props
 return <button className={`Button`}>{children}</button>
}
export default Button