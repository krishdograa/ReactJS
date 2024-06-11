import  './Headerstyle.css'
function Inputfield(props){

    const {
        placeholder,
        onChangeText
    } = props;

    return(
        <>        <br></br>
        <div id="box1">
            <input id='box'
            type="text"
            placeholder = {placeholder}
            onChange={(e) => onChangeText(e.target.value)}

            
            />
        </div>
        </>

    );

}

export default Inputfield;