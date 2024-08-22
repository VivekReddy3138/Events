import React, { useRef } from 'react'

function TenthForm() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let telInputRef = useRef();
  let engInputRef = useRef();
  let hindiInputRef = useRef();
  let mathsInputRef = useRef();
  let sciInputRef = useRef();
  let socInputRef = useRef();
  let resultParaRef = useRef();
  let lastNameSpanRef = useRef();
  let firstNameSpanRef = useRef();
  let telSpanRef = useRef();
  let hindiSpanRef = useRef();
  let engSpanRef = useRef();
  let mathsSpanRef = useRef();
  let sciSpanRef = useRef();
  let socSpanRef = useRef();

  return (
    <div>
      <form>
        <div>
            <label>firstName</label>
            <input ref={firstNameInputRef}
             onFocus={()=>{
              firstNameInputRef.current.style.backgroundColor= "pink";
            }}
            onBlur={()=>{
              firstNameInputRef.current.style.backgroundColor= "";
            }}></input>  
            <span ref={firstNameSpanRef}></span> 
        </div>
        <div>
            <label>LastName</label>
            <input ref={lastNameInputRef}
             onFocus={()=>{
              lastNameInputRef.current.style.backgroundColor= "pink";
            }}
            onBlur={()=>{
              lastNameInputRef.current.style.backgroundColor= "";
            }}></input>
            <span ref={lastNameSpanRef}></span> 
        </div>
        <div>
            <label>Telugu</label>
            <input ref={telInputRef}
            onFocus={()=>{
              telInputRef.current.style.backgroundColor= "pink";
            }}
            onBlur={()=>{
              telInputRef.current.style.backgroundColor= "";
            }}
           onChange={()=>{
            telSpanRef.current.innerHTML = telInputRef.current.value >= 35 ? "😁" : "😔";
           
           }}
            ></input> 
            <span ref={telSpanRef}></span>   
        </div>
        <div>
            <label>Hindi</label>
            <input ref={hindiInputRef}
             onFocus={()=>{
              hindiInputRef.current.style.backgroundColor= "pink";
            }}
            onBlur={()=>{
              hindiInputRef.current.style.backgroundColor= "";
            }}
            onChange={()=>{
              hindiSpanRef.current.innerHTML = hindiInputRef.current.value >= 35 ? "PASS" : "FAIL";
              hindiSpanRef.current.style.backgroundColor = hindiInputRef.current.value >= 35 ? "Green":"Red";
             }}  
           ></input> 
            <span ref={hindiSpanRef}></span>   
        </div>
        <div>
            <label>English</label>
            <input ref={engInputRef}
             onFocus={()=>{
              engInputRef.current.style.backgroundColor= "pink";
            }}
            onBlur={()=>{
              engInputRef.current.style.backgroundColor= "";
            }}
            onChange={()=>{
              engSpanRef.current.innerHTML = engInputRef.current.value >= 35 ? "PASS" : "FAIL";
              engSpanRef.current.style.backgroundColor = engInputRef.current.value >= 35 ? "Green":"Red";
             }}></input>
            <span  ref={engSpanRef}></span>    
        </div>
        <div>
            <label>Maths</label>
            <input ref={mathsInputRef}
             onFocus={()=>{
              mathsInputRef.current.style.backgroundColor= "pink";
            }}
            onBlur={()=>{
              mathsInputRef.current.style.backgroundColor= "";
            }}
            onChange={()=>{
              mathsSpanRef.current.innerHTML = mathsInputRef.current.value >= 35 ? "PASS" : "FAIL";
              mathsSpanRef.current.style.backgroundColor = mathsInputRef.current.value >= 35 ? "Green":"Red";
             }}></input>  
            <span  ref={mathsSpanRef}></span>  
        </div>
        <div>
            <label>Science</label>
            <input ref={sciInputRef}
             onFocus={()=>{
              sciInputRef.current.style.backgroundColor= "pink";
            }}
            onBlur={()=>{
              sciInputRef.current.style.backgroundColor= "";
            }}
            onChange={()=>{
              sciSpanRef.current.innerHTML = sciInputRef.current.value >= 35 ? "PASS" : "FAIL";
              sciSpanRef.current.style.backgroundColor = sciInputRef.current.value >= 35 ? "Green":"Red";
             }}></input> 
            <span  ref={sciSpanRef}></span>   
        </div>
        <div>
            <label>Social</label>
            <input ref={socInputRef}
             onFocus={()=>{
              socInputRef.current.style.backgroundColor= "pink";
            }}
            onBlur={()=>{
              socInputRef.current.style.backgroundColor= "";
            }}
            onChange={()=>{
              socSpanRef.current.innerHTML = socInputRef.current.value >= 35 ? "PASS" : "FAIL";
              socSpanRef.current.style.backgroundColor = socInputRef.current.value >= 35 ? "Green":"Red";
             }}></input> 
            <span  ref={socSpanRef}></span>   
        </div>
        <div>
          <button type="button" onClick={()=> {
            let firstName= firstNameInputRef.current.value;
            let lastName= lastNameInputRef.current.value;
              let telMarks= Number(telInputRef.current.value);
              let hindiMarks= Number(hindiInputRef.current.value);
              let engMarks= Number(engInputRef.current.value);
              let mathsMarks= Number(mathsInputRef.current.value);
              let sciMarks= Number(sciInputRef.current.value);
              let socMarks= Number(socInputRef.current.value);
              let totalMarks= telMarks+hindiMarks+engMarks+mathsMarks+sciMarks+socMarks;

              let perc = (totalMarks/600)*100

              telSpanRef.current.innerHTML = telMarks >= 35? "PASS" : "FAIL";
              hindiSpanRef.current.innerHTML = hindiMarks >= 35? "PASS" : "FAIL";
              engSpanRef.current.innerHTML = engMarks >= 35? "PASS" : "FAIL";
              mathsSpanRef.current.innerHTML = mathsMarks >= 35? "PASS" : "FAIL";
              sciSpanRef.current.innerHTML = sciMarks >= 35? "PASS" : "FAIL";
              socSpanRef.current.innerHTML = socMarks >= 35? "PASS" : "FAIL";

              resultParaRef.current.innerHTML = `${firstName} ${lastName} got Total marks of ${totalMarks} with percentage of ${perc.toFixed(2)}%`;
          }}>Calculate Result</button>   
        </div>
        <div>
         <p ref={resultParaRef}>please enter values</p>
        </div>
      </form>
    </div>
  )
}

export default TenthForm
