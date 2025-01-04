import { useEffect, useState } from "react";

function Preview({ text }){
    const [markedText, setMarkedText] = useState("");
    marked.use({
        gfm:true,
        breaks:true,
       
    });
    useEffect(()=>{         
      setMarkedText(marked.parse(text));
    },[ text ]);
    return(
        <div id="preview">{ markedText}</div>
    );
}
export default Preview;