interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Binyam',
  lastName: 'Techan',
  age: 21,
  location: 'Addis Ababa',
};

const student2: Student = {
  firstName: 'Jack',
  lastName: 'Black',
  age: 22,
  location: 'Tokyo',
};

const studentsList: Student[] = [student1, student2];

window.onload = () => {
  const table = document.createElement('table');
  table.style.width = '100%';
  table.style.borderCollapse = 'collapse';
  table.style.marginTop = '5px';

  const tableHeader = document.createElement('tr');
  const firstNameHeader = document.createElement('th');
  
  firstNameHeader.textContent = 'First Name';
  firstNameHeader.style.padding = '10px';
  firstNameHeader.style.border = '1px solid #ddd';
  firstNameHeader.style.textAlign = 'left';

  const locationHeader = document.createElement('th');
  locationHeader.textContent = 'Location';
  locationHeader.style.padding = '10px';
  locationHeader.style.border = '1px solid #ddd';
  locationHeader.style.textAlign = 'left';

  tableHeader.appendChild(firstNameHeader);
  tableHeader.appendChild(locationHeader);
  table.appendChild(tableHeader);

  studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.padding = '10px';
    firstNameCell.style.border = '1px solid #ddd';

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.padding = '10px';
    locationCell.style.border = '1px solid #ddd';

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

  document.body.appendChild(table);
  document.body.style.fontFamily = 'Arial, sans-serif';
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.style.display = 'flex';
  document.body.style.justifyContent = 'center';
  document.body.style.alignItems = 'center';
  document.body.style.height = '100vh';
  document.body.style.backgroundColor = '#f4f4f4';

  const tableContainer = document.createElement('div');
  tableContainer.style.maxWidth = '600px';
  tableContainer.style.minWidth = '300px';
  tableContainer.style.margin = '0 auto';
  tableContainer.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
  tableContainer.style.backgroundColor = '#fff';
  tableContainer.style.borderRadius = '8px';
  tableContainer.style.overflow = 'hidden';

  tableContainer.appendChild(table);
  document.body.appendChild(tableContainer);
};
