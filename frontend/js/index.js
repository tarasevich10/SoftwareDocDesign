// Utils
const getById = (id) => document.getElementById(id);

let allAgents = [];
let isInEditMode = false;

// Main elements
let addButton = getById("add-button");

const agentsListContainer = getById("users-list");

// Form input elements
const first_nameInput = getById("first_name");
const last_nameInput = getById("last_name");
const country = getById("country");
const emailInput = getById("email");
const startDatePickerInput = new Pikaday({
    field: getById("start_date"),
    format: "YYYY-MM-DD",
});

const renderItem = (values) => {
    return `
        <tr class="user-item">
          <th scope="row">${values.id}</th>
          <td>${values.first_name}</td>
          <td>${values.last_name}</td>
          <td>${values.country}</td>
          <td>${values.start_date}</td>
           <td>${values.email}</td>
           <td>
                <button type="button" class="btn btn-success" onClick="onItemEditClick('${values.id}')">Edit</button>
                <button type="button" class="btn btn-danger" onClick="onItemDeleteClick('${values.id}')">Delete</button>
            </td>
        </tr>
  `;
};

const clearInputs = () => {
    first_nameInput.value = "";
    last_nameInput.value = "";
    country.value = "";
    emailInput.value = "";
    startDatePickerInput.setDate(null);
};

const clearContainer = () => {
    agentsListContainer.innerHTML = "";
};

const renderAllItems = async () => {
    clearContainer();

    const agents = await Api.getAllUsers();

    allAgents = agents;

    agents.sort((prevAgent, agent) =>
        moment(prevAgent.start_date) > moment(agent.start_date) ? 1 : -1
    );

    agents.forEach((agent) => {
        agentsListContainer.insertAdjacentHTML("afterbegin", renderItem(agent));
    });
};

const switchEditAddMode = (isEdit, id) => {
    addButton.innerHTML = isEdit ? "Edit" : "Add";
    isInEditMode = isEdit;

    const updatedButton = addButton.cloneNode(true);
    addButton.parentNode.replaceChild(updatedButton, addButton);
    addButton = updatedButton;

    addButton.addEventListener(
        "click",
        isEdit ? () => onSubmitEditClicked(id) : onAddItemClick
    );
};

const onItemEditClick = (id) => {
    const foundAgent = allAgents.find((agent) => +id === +agent.id);

    first_nameInput.value = foundAgent.first_name;
    last_nameInput.value = foundAgent.last_name;
    country.value = foundAgent.country;
    startDatePickerInput.value = foundAgent.start_date;
    emailInput.value = foundAgent.email;

    switchEditAddMode(true, id);
};

const onItemDeleteClick = (id) => {
    Api.removeUser(id);

    renderAllItems();
};

const onAddItemClick = (e) => {
    e.preventDefault();

    const item = {
        first_name: first_nameInput.value,
        last_name: last_nameInput.value,
        country: country.value,
        start_date: startDatePickerInput.toString(),
        email: emailInput.value,
    };

    Api.addUser(item);

    clearInputs();

    renderAllItems();
};

const onSubmitEditClicked = (id) => {
    const updatedItem = {
        first_name: first_nameInput.value,
        last_name: last_nameInput.value,
        position: country.value,
        start_date: startDatePickerInput.toString(),
        email: emailInput.value,
    };

    Api.updateUser(id, updatedItem);

    clearInputs();

    renderAllItems();

    switchEditAddMode(false);
};

addButton.addEventListener("click", onAddItemClick);
renderAllItems();