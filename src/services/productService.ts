import productModel from "../models/productModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  const products = [
    {
      title: "Apple MacBook Air M2",
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-m2-2022",
      price: 1199,
      stock: 50,
    },
    // {
    //   title: "Dell XPS 13 Plus",
    //   image: "https://i.dell.com/sites/imagecontent/products/PublishingImages/xps-13-9320-laptop/spi/ng/notebook-xps-13-9320-campaign-hero-504x350-ng.psd",
    //   price: 1299,
    //   stock: 40,
    // },
    // {
    //   title: "HP Spectre x360 14",
    //   image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08104943.png",
    //   price: 1399,
    //   stock: 35,
    // },
    // {
    //   title: "Lenovo ThinkPad X1 Carbon Gen 11",
    //   image: "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-11-hero.png?context=bWFzdGVyfHJvb3R8MzE0NjQ5fGltYWdlL3BuZ3xoNzYvaDJmLzE0NzM3NTUwNjA0MzY2LnBuZ3w1NjNiOGFhNmQxNjFiNzYxODkyNzdiY2M3NTY4ZDViZDg0ZDA0MTA2NDUwNTM2ZmRlOTYxMWQ4OWRiZjVjZjA4",
    //   price: 1499,
    //   stock: 30,
    // },
    // {
    //   title: "Asus ROG Zephyrus G14",
    //   image: "https://dlcdnwebimgs.asus.com/gain/F271BD06-B1D7-44DA-8E64-2C2FC2AC55A9",
    //   price: 1599,
    //   stock: 25,
    // },
    // {
    //   title: "Microsoft Surface Laptop 5",
    //   image: "https://c.s-microsoft.com/en-us/CMSImages/Surface-Laptop-5-13-Platinum.png",
    //   price: 999,
    //   stock: 45,
    // },
    // {
    //   title: "Acer Swift X 14",
    //   image: "https://static.acer.com/up/Resource/Acer/Laptops/Swift_X_14/Images/20230522/Swift_X_14_AGW_KSP02.png",
    //   price: 899,
    //   stock: 60,
    // },
    // {
    //   title: "Razer Blade 15",
    //   image: "https://assets2.razerzone.com/images/pnx.assets/ae65e28c8a28cfda66f243c9bda3de64/razer-blade-15-2023-gallery-1.png",
    //   price: 1999,
    //   stock: 20,
    // },
    // {
    //   title: "MSI Prestige 14 Evo",
    //   image: "https://storage-asset.msi.com/global/picture/image/feature/laptop/Prestige-14-Evo-A13M/kv.png",
    //   price: 1099,
    //   stock: 38,
    // },
    // {
    //   title: "Samsung Galaxy Book3 Pro 360",
    //   image: "https://images.samsung.com/is/image/samsung/p6pim/levant/feature/164754290/levant-feature-galaxy-book3-pro-360-14inch-16inch-highlights-535777935?$FB_TYPE_A_MO_JPG$",
    //   price: 1399,
    //   stock: 28,
    // },
  ];
  

  const existingProducts = await getAllProducts();
  if (existingProducts.length === 0) {
    await productModel.insertMany(products);
  }
};
