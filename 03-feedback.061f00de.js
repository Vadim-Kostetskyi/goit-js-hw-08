const e=document.querySelector(".feedback-form"),a=e.email,t=e.message,l=localStorage.getItem("feedback-form-state"),s=JSON.parse(l);null!==s&&(a.value=s.email,t.value=s.message);e.addEventListener("submit",(l=>{l.preventDefault();const s={email:a.value,message:t.value},o=JSON.stringify(s);localStorage.setItem("feedback-form-state",o),console.log(o),e.reset()}));
//# sourceMappingURL=03-feedback.061f00de.js.map