import styled from "styled-components";
const ColorCont = styled.div`
background-color:${props=>props.cl};
color:${props=>props.text_cl}
`

const BigText = styled.h1 
`
font-size: bigger;
`
//utility tools are not capitalized
//things used in UI are capitalized 

export default function ImageCard({
        //default 
        img = "/dog.jpeg",
        bg = "aliceblue",
        tcl = "#000",
        children=null


}){

//same as using object in inline style - hence double brace, same as const mystyle = {backgroundColor:"red"} ----- style = {{backgroundColor: "red"}}
        return <ColorCont cl ={bg} text_cl = {tcl}>
                <img src ={img}></img>
                <h1> this is a dog</h1>
                {children}
                
        </ColorCont>
        //chilren allows you to put things inside your component 
}