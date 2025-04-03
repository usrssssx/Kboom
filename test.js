const form = document.getElementById('MyForm')
const parentNameImput = document.getElementById('parentName')
const phoneNumberInput = document.getElementById('phoneNumber')
const ageInput = document.getElementById('age')
const kidNameInput = document.getElementById('kidName')

form.addEventListener('submit', (event) =>
{
  const parentName = parentNameImput.value;
  const phoneNumber = phoneNumberInput.value;
  const age = ageInput.value;
  const kidName = kidNameInput.value;


  const data ={
    parentName: parentName,
    phoneNumber: phoneNumber,
    age: age,
    kidName: kidName
  };

  Email.send({
    SecureToken: "WCBhf9wXq0Tb5y_kD",
    To: '5krippi@mail.ru',
    From: '5krippi@mail.ru',
    Body: 'Имя родителя:' + data.parentName + '<br>' + 'Возраст ребенка:' + data.age + '<br>' + 'Номер телефона:' + data.phoneNumber + '<br>' + 'Имя ребенка:' + data.kidName + '<br>'

 
  }).then(message => alert(message)
  );
});
