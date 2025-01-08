import { useEffect, useState } from "react";
//import DOMPurify from  "dompurify";

function Preview({ text }){
    const [markedText, setMarkedText] = useState();
    marked.use({
        gfm:true,
        breaks:true
    });
    useEffect(()=>{
        //const purifiedText = DOMPurify.sanitize(text);          
        setMarkedText({__html: marked.parse(text)});
    },[ text ]);
    return(
        <div id="preview" dangerouslySetInnerHTML={ markedText }></div>
    );
}
export default Preview;