let REACT_APP_API_URL = process.env.REACT_APP_API_URL || "https://naksh-jewels-production-5dfc.up.railway.app";

export const fetchProducts = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/products`)
;

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};
