const BASE_URL = "http://localhost:8018/api";
<<<<<<< HEAD
export default BASE_URL;
=======

// const header = () => {
//     const Token  = localStorage["user_token"] ? `Token ${localStorage["user_token"]}` : "";
//     return {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': Token
//     }
// }

const Token  = localStorage["user_token"] ? JSON.parse(localStorage["user_token"]) : "";

export { BASE_URL, Token };
>>>>>>> cd19febd9bf59a9cb4f9feeb668962fcc365f380
