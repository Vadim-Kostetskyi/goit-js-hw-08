const e=document.querySelector(".feedback-form"),t=e.email,a=e.message,l=localStorage.getItem("feedback-form-state"),s=JSON.parse(l);null!==s&&(t.value=s.email,a.value=s.message);e.addEventListener("submit",(l=>{l.preventDefault();const s=t.value,o=a.value;console.log("email:"+s),console.log("message"+o),e.reset()})),e.addEventListener("input",_.throttle((()=>{let e={email:t.value,message:a.value},l=JSON.stringify(e);localStorage.setItem("feedback-form-state",l)}),500));
//# sourceMappingURL=03-feedback.dd84eba8.js.map
