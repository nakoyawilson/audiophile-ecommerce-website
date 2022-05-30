import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  item: { type: String, required: true },
  quantity: { type: Number, required: true, default: 0 },
});

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    slug: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      mobile: {
        type: String,
      },
      tablet: {
        type: String,
      },
      desktop: {
        type: String,
      },
    },
    category: {
      type: String,
      required: true,
    },
    categoryImage: {
      mobile: {
        type: String,
      },
      tablet: {
        type: String,
      },
      desktop: {
        type: String,
      },
    },
    new: {
      type: Boolean,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: true,
    },
    features: {
      type: String,
      required: true,
    },
    includes: [itemSchema],
    gallery: {
      first: {
        mobile: {
          type: String,
        },
        tablet: {
          type: String,
        },
        desktop: {
          type: String,
        },
      },
      second: {
        mobile: {
          type: String,
        },
        tablet: {
          type: String,
        },
        desktop: {
          type: String,
        },
      },
      third: {
        mobile: {
          type: String,
        },
        tablet: {
          type: String,
        },
        desktop: {
          type: String,
        },
      },
    },
    others: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
