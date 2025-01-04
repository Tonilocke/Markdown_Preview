import { useEffect, useState } from "react";

const Editor = ({ text, setText }) =>{
let defaultText = "# Welcome to my React Markdown Previewer \n"+
"## This is a sub-heading \n"+
"Heres some code, `<div></div>`, between 2 backticks. \n"+
"You can also make text **bold**... whoa! \n"+
"[links](https://www.freecodecamp.org), and \n"+
"> Block Quotes! \n"+
"- And of course there are lists.\n"+
  "- Some are bulleted. \n" +
"![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";
  useEffect(()=>{
    setText(defaultText);
  },[]);
  console.log(text)
    return(
        <textarea name="editor" id="editor" cols={60} rows={10} defaultValue={ defaultText } onChange={ (e)=>setText(e.target.value) }></textarea>
    );
}

export default Editor;