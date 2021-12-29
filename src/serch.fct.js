var input = document.getElementById('etiquetas');
var text = document.getElementById('tickets');
const icons = [...document.getElementsByClassName("cross")];


input.addEventListener('keydown', (e) => {
    
    let keyName = e.key;
    if(e.key === "Enter") {
        e.preventDefault();
        let p = document.createElement('p');
        p.textContent = input.value;
            
        text.insertAdjacentHTML("beforeend", `<p>${p.textContent} <i className="fas fa-times cross"></i></p>`);
        
        let newIcon = text.lastElementChild.getElementsByClassName('cross');
        newIcon.addEventListener('click', function() {
            newIcon.closest("p").remove()
        });
        
        
    }
    
        
});

icons.forEach((icon) =>
  icon.addEventListener("click", function () {
    icon.closest("p").remove();
  })
);





