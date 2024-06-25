document.getElementById('add-recipe-btn').addEventListener('click', function() {
    const name = document.getElementById('recipe-name').value;
    const details = document.getElementById('recipe-details').value;

    if (name && details) {
        addRecipe(name, details);
        clearForm();
    } else {
        alert('Please enter both a recipe name and details.');
    }
});

function addRecipe(name, details) {
    const recipesList = document.getElementById('recipes-list');

    const li = document.createElement('li');

    const recipeInfo = document.createElement('div');
    recipeInfo.className = 'recipe-info';
    recipeInfo.innerHTML = `<strong>${name}</strong><p>${details}</p>`;
    li.appendChild(recipeInfo);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', function() {
        recipesList.removeChild(li);
    });
    li.appendChild(deleteBtn);

    recipesList.appendChild(li);
}

function clearForm() {
    document.getElementById('recipe-name').value = '';
    document.getElementById('recipe-details').value = '';
}
