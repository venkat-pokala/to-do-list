let array = [];
  render();
  function render(){
    let todoHTML = '';
    for(let i = 0; i<array.length; i++)
    {
      todoHTML += `
      <div>
        ${array[i].name}
      </div>
      <div>
        ${array[i].date}
      </div>
      <div>
        <button class="delete-button" onclick="
            array.splice(${i},1);
            render();
          ">Delete</button>
      </div>
      `;
    }
    document.querySelector('.js-div').innerHTML = todoHTML;
  }
  
  
  function addToArray(){
    const x = document.querySelector('.js-todo-name'); 
    const y = document.querySelector('.js-todo-date');
    if(x.value=='' || y.value==''){
        alert("Fields cannot be blank");
    }
    else{
    const z = {name : x.value, date:y.value};
    array.push(z);
    x.value = '';
    y.value=null;
    render();
    }
  }