// ==========================================
// 🌐 JSON API INTRODUCTION NOTES
// ==========================================

/*
1. What is an API?
   - API stands for Application Programming Interface.
   - It acts as a messenger that talks to the backend server and brings data to our frontend.
   - In modern web development, APIs usually send data in JSON format.

2. What is JSON?
   - JSON stands for JavaScript Object Notation.
   - It looks almost exactly like a JavaScript Object literal, but with two major differences:
     a) Both "keys" and "values" MUST be wrapped in double quotes ("").
     b) It does not have a variable name assignment (like 'const user =').

3. Format 1: JSON Object Structure
   - This is how a single user or item's data arrives from the backend server.
*/

// Example of a JSON Object 

// {
//     "courseName": "webdev",
//     "price": "25000",
//     "courseInstructor": "alishba"
// }


/*
4. Format 2: JSON Array Structure (Most Common)
   - When fetching lists of data (like a list of products, users, or courses), 
     the server sends an Array containing multiple JSON Objects.
*/

// Example of a JSON Array of Objects

[
    {
        "id": "1",
        "name": "alishba",
        "isLoggedIn": true
    },
    {
        "id": "2",
        "name": "shahid",
        "isLoggedIn": false
    }
]


/*
5. Tools for JSON Testing:
   - To read messy API data easily, developers use extensions like "JSON Viewer".
   - You can use online tools like "jsonformatter.org" to clean up and format raw API data.
   - Famous APIs to practice with: "https://api.github.com/users/your-username" or "RandomUser API".
*/