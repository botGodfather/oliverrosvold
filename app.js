const testId = document.getElementById('testId');
const buttonOne = document.getElementById('buttonOne');

const buttonTwo = document.getElementById('buttonTwo');
const dropdown = document.getElementById('dropdown');

let state = false;
buttonOne.onclick = function () {
    state = !state;
    testId.innerHTML = state
        ? 'first test website, to learn most of the stuff I need to know for HTML, CSS and JS. Please follow a long while I learn.'
        : '';
};

/*
buttonTwo.onclick = function () {
    dropdown.style.display =
        dropdown.style.display === 'none' ? 'block' : 'none';
};
*/
