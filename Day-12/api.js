// url = https://dummyjson.com/products for the backend

// .then .catch .finally

fetch("https://dummyjson.com/products")

.then(
    response => {
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        return response.json();
    },
)

.then(
    data => {
        console.log(data);
    }
)

.catch(
    error => {
        console.log(error);
    }
)
.finally(
    () => {
        console.log("Done");
    }
)



// try and catch

async function fetchData() {
   try {
       const response = await fetch("https://dummyjson.com/products");
       if (!response.ok) {
           throw new Error(`HTTP ${response.status}`);
       }
       const data = await response.json();
       console.log(data);

   } catch (error) {
      console.log(error);
   }
}

fetchData();