import userModel from "../models/useModel";
import bcrypt from 'bcryptjs'; // Secure password hashing

import jwt from "jsonwebtoken"

interface RegisterParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const register = async ({ firstName, lastName, email, password }: RegisterParams) => {
  const findUser = await userModel.findOne({ email });

  if (findUser) {
    return { data: "User already exists!", statusCode: 400 };
  }

  // Hash the password before saving the user
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new userModel({
    email,
    password: hashedPassword,
    firstName,
    lastName,
  });

  await newUser.save();
  return { data: generateJWT({firstName, lastName, email}), statusCode: 200 };
};

interface LoginParams {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginParams) => {
  const findUser = await userModel.findOne({ email });

  if (!findUser) {
    return { error: { message: "Incorrect email or password" }, statusCode: 400 };
  }

  // Compare the provided password with the hashed password in the database
  const passwordMatch = await bcrypt.compare(password, findUser.password);

  if (!passwordMatch) {
    return { error: { message: "Incorrect email or password" }, statusCode: 400 };
  }

  return { data: generateJWT({email, firstName: findUser.firstName, lastName: findUser.lastName} ), statusCode: 200 }; // Successfully logged in
};


const generateJWT = (data: any) => {
  return jwt.sign(data, 'dYicDEGytegW9t7LTaYEs1agh3rCSwzk')
}