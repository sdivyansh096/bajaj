// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())

 
// app.post('/api/put/data', (req, res) => {
//     console.log('receiving data ...');
//     console.log('body is ',req.body);
//     res.send(req.body);
// });



// app.listen(3000, () => {
//   console.log("port is running");
// })


// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const userData = {
//   user_id: "divyansh_sharma_14May2004",
//   email: "divyansh1695.be21@chitkara.edu.in",
//   roll_number: "2110991695"
// };

// app.post('/api/v1/post', (req, res) => {
//   try {
//     const data = req.body.data;

//     const numbers = [];
//     const alphabets = [];

//     data.forEach(item => {
//       if (!isNaN(item)) {
//         numbers.push(item);
//       } else {
//         alphabets.push(item);
//       }
//     });

    
//     const evenNumbers = numbers.filter(num => num % 2 === 0);
//     const oddNumbers = numbers.filter(num => num % 2 !== 0);
    
//     const uppercaseAlphabets = alphabets.map(a => a.toUpperCase());
    
//     const response = {
//       is_success: true,
//       user_id: userData.user_id,
//       email: userData.email,
//       roll_number: userData.roll_number,
//       odd_numbers: oddNumbers,
//       even_numbers: evenNumbers,
//       alphabets: uppercaseAlphabets
//     };
//     res.json(response);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.listen(process.env.PORT || 3000, () => {
//   console.log("Server is running");
// });


const express = require('express');
const app = express();
const port =  3000; 


const userId = "divyansh_sharma_2110991695";
const email = "divyansh1695.be21@chitkara.edu.in";
const rollNumber = "2110991695";

app.post('/api/v1/post', (req, res) => {
  try {
    const data = req.body.data;

    if (!data || !Array.isArray(data)) {
      throw new Error('Invalid request: data is missing or not an array');
    }

    const evenNumbers = [];
    const oddNumbers = [];
    const alphabets = [];

    for (const item of data) {
      if (typeof item === 'string') {
        alphabets.push(item.toUpperCase());
      } else if (typeof item === 'number') {
        if (item % 2 === 0) {
          evenNumbers.push(item);
        } else {
          oddNumbers.push(item);
        }
      } else {
        throw new Error('Invalid data type in array');
      }
    }

    const response = {
      is_success: true,
      user_id: userId,
      email: email,
      roll_number: rollNumber,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ is_success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});