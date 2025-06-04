import mongoose, { ObjectId, Schema } from "mongoose";
import { IProduct } from "./productModel";

const CartStatusEnum = ["active" , "completed"]


export interface ICartItem extends Document {
  product: IProduct;
  unitPrice: number;
  quantity: number;

}

const cartItemSchema = new Schema<ICartItem>({
  product: {type: Schema.Types.ObjectId, ref: "Product", required: true},
  quantity: {type: Number, required: true, default: 1},
  unitPrice: {type: Number, required: true}
})

export interface ICart extends Document {

  userId: ObjectId | string;
  item: ICartItem[]
  totalAmount: number;
  status: "active" | "completed",
}



const cartSchema = new Schema<ICart>({
  userId: {type: Schema.Types.ObjectId, ref: "User", required: true},
  item: [cartItemSchema],
  totalAmount: {type: Number, required: true},
  status: {type: String, enum: CartStatusEnum, default: "active"}

  })

  export const cartModel =  mongoose.model<ICart>("Cart", cartSchema)