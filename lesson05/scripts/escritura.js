const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value != '') {

        let li = document.createElement('li');
        let deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        })
        list.append(li);
    }
    else {
        input.focus();
    }
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    })
});


