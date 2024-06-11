// import  './Headerstyle.css'

function Header(props){
    // const name = props.name;
    
    const {
        name
    } = props;

    return(
        <div id = "main">
             {name}
             
        </div>
    );

}

export default Header;