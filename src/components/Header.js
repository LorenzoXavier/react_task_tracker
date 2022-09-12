import PropType from 'prop-types'; 
import Button from "./Button";

function Header({title, onAdd, showAdd}) {  
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button  color={showAdd ? "red" : "green" } text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = { title: 'Default Title' }

Header.propTypes = {
  title: PropType.string.isRequired
}

export default Header

















// css in JS
// to define css, you can make custom call as below - using camel case unlike css

/* <h1 style={headingStyle}>{title}</h1> */
// const headingStyle = {
//   color: 'red', 
//   backgroundColor: 'black'
// }