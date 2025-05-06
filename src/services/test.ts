// import userModel from "../models/useModel";

// interface RegisterParams {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
// }

// export const register = async ({ firstName, lastName, email, password }: RegisterParams) => {
//   const findUser = await userModel.findOne({ email });

//   if (findUser) {
//     return { data: "User already exists!", statusCode: 400 };
//   }

//   const newUser = new userModel({ email, password, firstName, lastName });
//   await newUser.save();

//   return { data: newUser, statusCode: 200 };
// };

// interface LoginParams {
//   email: string;
//   password: string;
// }

// export const login = async ({ email, password }: LoginParams) => {
//   const findUser = await userModel.findOne({ email });

//   if (!findUser || findUser.password !== password) {
//     return { error: { message: "Incorrect email or password" }, statusCode: 400 };
//   }

//   return { data: findUser, statusCode: 200 };
// };
