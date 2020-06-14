// const connection = require("../database/connection");
// const excelToJson = require("convert-excel-to-json");

// const result = excelToJson({
//   sourceFile: "./src/uploads/voxus_teste.xlsx",
//   header: {
//     rows: 1,
//   },
// });

// console.log(result);

// module.exports = {
//   /* Create payments w/ file */
//   async create(request, response) {
//     var external_tax = 0;

//     result.map((pay) => (external_tax = pay.value * 0.05));

//     result.map((payment) =>
//       connection("payments").insert(
//         payment.A,
//         payment.B,
//         payment.C,
//         external_tax,
//         payment.D
//       )
//     );

//     return response.json({ id });
//   },
// };
