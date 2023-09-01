const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const DateOfBirth = document.getElementById("DateOfBirth");
const Gender = document.getElementById("Gender");
const Country = document.getElementById("Country");
const State = document.getElementById("State");
const Town = document.getElementById("Town");
const ZipCode = document.getElementById("ZipCode");
const phoneNumber1 = document.getElementById("phoneNumber1");
const phoneNumber2 = document.getElementById("phoneNumber2");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  let valid = validateInputs();

  console.log("Valid inputs", valid);

  if (valid > 0) {
    e.preventDefault();
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidfirstName = (firstName) => {
  const re = /^[A-Za-z]{2,255}$/;
  return re.test(firstName);
};

const isValidlastName = (lastNam) => {
  const re = /^[A-Za-z]{2,255}$/;
  return re.test(lastNam);
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const DateOfBirthValue = DateOfBirth.value.trim();
  const GenderValue = Gender.value.trim();
  const CountryValue = Country.value.trim();
  const StateValue = State.value.trim();
  const TownValue = Town.value.trim();
  const ZipCodeValue = ZipCode.value.trim();
  const phoneNumber1Value = phoneNumber1.value.trim();
  const phoneNumber2Value = phoneNumber2.value.trim();
  const emailValue = email.value.trim();
  let error = 0;

  if (firstNameValue === "") {
    setError(firstName, "This field is required");
    error++;
  } else if (!isValidfirstName(firstNameValue)) {
    setError(firstName, "Enter a correct NIN");
    error++;
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    setError(lastName, "This field is required");
    error++;
  } else if (!isValidlastNam(lastNameValue)) {
    setError(lastName, "Enter a correct NIN");
    error++;
  } else {
    setSuccess(lastName);
  }
  if (DateOfBirthValue === "") {
    setError(DateOfBirth, "This field is required");
    error++;
  } else {
    setSuccess(DateOfBirth);
  }
  if (GenderValue === "") {
    setError(Gender, "This field is required");
    error++;
  } else {
    setSuccess(Gender);
  }
  if (CountryValue === "") {
    setError(Country, "This field is required");
    error++;
  } else {
    setSuccess(Country);
  }
  if (StateValue === "") {
    setError(State, "This field is required");
    error++;
  } else {
    setSuccess(State);
  }
  if (TownValue === "") {
    setError(Town, "This field is required");
    error++;
  } else {
    setSuccess(Town);
  }
  if (ZipCodeValue === "") {
    setError(ZipCode, "This field is required");
    error++;
  } else {
    setSuccess(ZipCode);
  }
  if (phoneNumber1Value === "") {
    setError(phoneNumber1, "This field is required");
    error++;
  } else {
    setSuccess(phoneNumber1);
  }
  if (phoneNumber2Value === "") {
    setError(phoneNumber2, "This field is required");
    error++;
  } else {
    setSuccess(phoneNumber2);
  }
  if (emailValue === "") {
    setError(email, "This field is required");
    error++;
  } else {
    setSuccess(email);
  }

  return error;
};
