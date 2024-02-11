export const endPoints = {
  homePage: {
    getCategory: `category/viewCategory`,
  },
  categoryPage: (categoryId) =>
    `product/getProductBycategory/?categoryId=${categoryId}`,
  getOtp: `customer/send-otp`,
};
