const getElement = document.querySelector(".fetch");
const URL = "https://restcountries.com/v3.1/name/azerbaijan";
fetch(URL)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
    data.map(element => {
      console.log(element);
         getElement.innerHTML += `
   <div class="fetch">
              <h1>
                ${element.altSpellings[1]}
              </h1>
              
              <img src=${element.coatOfArms.png}>
              <p >
               ${element.region}
              </p>
            </div>
      `;
      
    });
  });
  