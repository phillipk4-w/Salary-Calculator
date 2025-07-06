

function displayHourly() {
  const container = document.getElementById('input');
  document.getElementById('weekly').innerHTML = '';
  document.getElementById('monthly').innerHTML = '';
  document.getElementById('yearly').innerHTML = '';
  container.innerHTML = '';
  

  const wageLabel = document.createElement('label');
  wageLabel.id = 'hourlyL';
  wageLabel.textContent = 'Hourly Wage: ';
  const wageInput = document.createElement('input');
  wageInput.type = 'number';
  wageInput.id = 'hourlyWage';
  
  const hourLabel = document.createElement('label');
  hourLabel.className = 'hoursL';
  hourLabel.textContent = ' Weekly Hours: ';
  const hourInput = document.createElement('input');
  hourInput.type = 'number';
  hourInput.id = 'hours';

  const calcButton = document.createElement('button');
  calcButton.textContent = 'Calculate';

  calcButton.addEventListener('click', calculateHourlyTakeHome);

  container.appendChild(wageLabel);
  container.appendChild(wageInput); 
  container.appendChild(hourLabel);
  container.appendChild(hourInput);
  container.appendChild(calcButton);
}

function displaySalary(){
    const container = document.getElementById('input');
    document.getElementById('weekly').innerHTML = '';
  document.getElementById('monthly').innerHTML = '';
  document.getElementById('yearly').innerHTML = '';
  container.innerHTML = '';

  const wageLabel = document.createElement('label');
  wageLabel.id = 'salaryL';
  wageLabel.textContent = 'Salary: ';
  const wageInput = document.createElement('input');
  wageInput.type = 'number';
  wageInput.id = 'salaryT';

  const calcButton = document.createElement('button');
  calcButton.textContent = 'Calculate';
  calcButton.addEventListener('click', calculateSalary);

  container.appendChild(wageLabel);
  container.appendChild(wageInput);
  container.appendChild(calcButton);

}

function calculateSalary(){
    const wage = parseFloat(document.getElementById('salaryT').value);
    const taxRate = 0.19;
    const weekContainer = document.getElementById('weekly');
  const monthContainer = document.getElementById('monthly');
  const yearlyContainer = document.getElementById('yearly');

  const yearlyNet = (wage * (1.0 - taxRate)).toFixed(2);
   const weeklyNet = (yearlyNet / 52).toFixed(2);
  const weeklyNeed = (weeklyNet * 0.50).toFixed(2);
  const weeklyWant = (weeklyNet * 0.30).toFixed(2);
  const weeklySave = (weeklyNet * 0.20).toFixed(2);
  const monthlyNet = (yearlyNet / 12).toFixed(2);
  const monthlyNeed = (monthlyNet * 0.5).toFixed(2);
  const monthlyWant = (monthlyNet * 0.3).toFixed(2);
  const monthlySave = (monthlyNet * 0.2).toFixed(2);
  const yearlyNeed = (yearlyNet * 0.5).toFixed(2);
  const yearlyWant = (yearlyNet * 0.3).toFixed(2);
  const yearlySave = (yearlyNet * 0.2).toFixed(2);


  weekContainer.innerHTML = `
  <p>Total weekly take-home: $${weeklyNet}</p>
  <p>Weekly Need Budget: $${weeklyNeed}</p>
  <p>Weekly Want Budget: $${weeklyWant}</p>
  <p>Weekly Savings Budget: $${weeklySave}</p>`;

  monthContainer.innerHTML = `
  <p>Total monthly take-home: $${monthlyNet}</p>
  <p>Monthly Need Budget: $${monthlyNeed}</p>
  <p>Monthly Want Budget: $${monthlyWant}</p>
  <p>Monthly Savings Budget: $${monthlySave}</p>`;

  yearlyContainer.innerHTML = `
  <p>Total yearly take-home: $${yearlyNet}</p>
  <p>Yearly Need Budget: $${yearlyNeed}</p>
  <p>Yearly Want Budget: $${yearlyWant}</p>
  <p>Yearly Savings Budget: $${yearlySave}</p>`;
  
  console.log({ yearlyNet });

}

function calculateHourlyTakeHome() {
  const wage = parseFloat(document.getElementById('hourlyWage').value);
  const hours = parseFloat(document.getElementById('hours').value);
  const taxRate = 0.19;
  const weekContainer = document.getElementById('weekly');
  const monthContainer = document.getElementById('monthly');
  const yearlyContainer = document.getElementById('yearly');
  
  const yearlyGross = wage * hours * 52;
  const yearlyNet = yearlyGross * (1.0 - taxRate);
  const weeklyNet = (yearlyNet / 52).toFixed(2);
  const weeklyNeed = (weeklyNet * 0.50).toFixed(2);
  const weeklyWant = (weeklyNet * 0.30).toFixed(2);
  const weeklySave = (weeklyNet * 0.20).toFixed(2);
  const monthlyNet = (yearlyNet / 12).toFixed(2);
  const monthlyNeed = (monthlyNet * 0.5).toFixed(2);
  const monthlyWant = (monthlyNet * 0.3).toFixed(2);
  const monthlySave = (monthlyNet * 0.2).toFixed(2);
  const yearlyNeed = (yearlyNet * 0.5).toFixed(2);
  const yearlyWant = (yearlyNet * 0.3).toFixed(2);
  const yearlySave = (yearlyNet * 0.2).toFixed(2);


  weekContainer.innerHTML = `
  <p>Total weekly take-home: $${weeklyNet}</p>
  <p>Weekly Need Budget: $${weeklyNeed}</p>
  <p>Weekly Want Budget: $${weeklyWant}</p>
  <p>Weekly Savings Budget: $${weeklySave}</p>`;

  monthContainer.innerHTML = `
  <p>Total monthly take-home: $${monthlyNet}</p>
  <p>Monthly Need Budget: $${monthlyNeed}</p>
  <p>Monthly Want Budget: $${monthlyWant}</p>
  <p>Monthly Savings Budget: $${monthlySave}</p>`;

  yearlyContainer.innerHTML = `
  <p>Total yearly take-home: $${yearlyNet}</p>
  <p>Yearly Need Budget: $${yearlyNeed}</p>
  <p>Yearly Want Budget: $${yearlyWant}</p>
  <p>Yearly Savings Budget: $${yearlySave}</p>`;
  
  console.log({ yearlyNet });
}

document.getElementById('hourly').addEventListener('change', displayHourly);
document.getElementById('salary').addEventListener('change', displaySalary);