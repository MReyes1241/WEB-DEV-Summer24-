document.addEventListener('DOMContentLoaded',(event) => {
    const addButton = document.querySelector('button:nth-of-type(1)');
    const deleteButton = document.querySelector('button:nth-of-type(2)');
    const list = document.querySelector('ol')

    addButton.addEventListener('click', () => {
        let newItem = document.createElement('li');
        let text = document.createTextNode('New State');
        newItem.appendChild(text);
        list.appendChild(newItem);
    });

    deleteButton.addEventListener('click', () => {
        let olLastItem = list.lastElementChild;
        if(olLastItem){
            list.removeChild(olLastItem);
        }
    });
    
});