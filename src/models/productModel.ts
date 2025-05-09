import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  title: string;
  image: string;
  price: string;
  stock: number;
}

const productSchema = new Schema<IProduct>({
  title: {type: String, require: true},
  image: {type: String, require: true},
  price: {type: String, require: true},
  stock: {type: Number, require: true},
})

const productModel = mongoose.model<IProduct>('Product', productSchema)

export default productModel