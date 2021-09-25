import "./styles.css";

import UseEffect from "./component/Useeffect";

export default function App() {
  return (
    <>
    <div>
      <div className="App">  
        <UseEffect />
      </div>
      </div>
    </>
  );
}

//button js
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.button'),
      loader = document.querySelector('.loader'),
      check = document.querySelector('.check');
  
  btn.addEventListener('click', function () {
    loader.classList.add('active');    
  });
 
  loader.addEventListener('animationend', function() {
    check.classList.add('active'); 
  });
});