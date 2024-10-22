//1.Promise
// //a. Membuat function helloWorld yang mengembalikan sebuah Promise
// function helloWorld() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello World!");
//         }, 2000);
//     });
// }

// //b. Membuat async function messages
// async function messages() {
//     const msg = await helloWorld();
//     console.log(msg);
// }

// //c. Memanggil function messages
// messages();

//2.Fetch
// // Membuat function ambilDataUser yang menggunakan fetch
// function ambilDataUser() {
//     fetch("https://reqres.in/api/users")
//         .then((response) => {
//             // Mengembalikan response sebagai JSON
//             return response.json();
//         })
//         .then((users) => {
//             // Menampilkan data first_name dan last_name dari tiap user
//             users.data.forEach(user => {
//                 console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
//             });
//         })
//         .catch((error) => {
//             console.error('Error fetching data:', error);
//         });
// }

// // Memanggil function ambilDataUser
// ambilDataUser();

//3.Async Await
// // Membuat async function ambilDataUser yang menggunakan async/await
// async function ambilDataUser() {
//     try {
//         // Menunggu fetch data dari API
//         const response = await fetch("https://reqres.in/api/users");
//         // Mengubah response menjadi JSON
//         const users = await response.json();
//         // Menampilkan data first_name dan last_name dari tiap user
//         users.data.forEach(user => {
//             console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
//         });
//     } catch (error) {
//         // Menangkap dan menampilkan error jika terjadi kesalahan
//         console.error('Error fetching data:', error);
//     }
// }

// // Memanggil function ambilDataUser
// ambilDataUser();

//4.Axios
// Mengimpor Axios
import axios from 'axios';

// Membuat async function ambilDataUser yang menggunakan Axios
async function ambilDataUser() {
    try {
        // Mengambil data dari API menggunakan Axios
        const response = await axios.get("https://reqres.in/api/users");
        // Mengambil data pengguna dari response
        const users = response.data;

        // Menampilkan data first_name dan last_name dari tiap user
        users.data.forEach(user => {
            console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
        });
    } catch (error) {
        // Menangkap dan menampilkan error jika terjadi kesalahan
        console.error('Error fetching data:', error);
    }
}

// Memanggil function ambilDataUser
ambilDataUser();

