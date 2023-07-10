function calcInc(salary, rating) {
  var increPer;

  if (rating === 'excellent') {
      increPer = 0.1; // 10% increment for excellent rating
  } else if (rating === 'good') {
      increPer = 0.07; // 7% increment for good rating
  } else if (rating === 'average') {
      increPer = 0.05; // 5% increment for average rating
  } else {
      increPer = 0; // No increment for other ratings
  }

  var increAmo = salary * increPer;
  var newSalary = salary + increAmo;

  return {
      salary: salary.toFixed(1),
      rating: rating,
      increPer: (increPer * 100).toFixed(1) + '%',
      increAmo: increAmo.toFixed(1),
      newSalary: newSalary.toFixed(1)
  };
}

function disIncrementSlip() {
  var salaryInput = document.getElementById('salary');
  var ratingInput = document.getElementById('rating');
  var slipContainer = document.getElementById('slipContainer');

  var salary = parseFloat(salaryInput.value);
  var rating = ratingInput.value;
  var incrementSlip = calcInc(salary, rating);

  var slipHtml = `
      <h2>Salary Increment Slip</h2>
      <p>Previous Salary: $${incrementSlip.salary}</p>
      <p>Rating: ${incrementSlip.rating}</p>
      <p>Increment Percentage: ${incrementSlip.increPer}</p>
      <p>Increment Amount: $${incrementSlip.increAmo}</p>
      <p>New Salary: $${incrementSlip.newSalary}</p>
  `;

  slipContainer.innerHTML = slipHtml;
}