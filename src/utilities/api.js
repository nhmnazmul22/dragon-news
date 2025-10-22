export const fetchCategories = async () => {
  try {
    console.log("I am calling");
    const response = await fetch("/categories.json");
    return response.json();
  } catch (err) {
    throw new Error("Error fetching Categories data", err?.message);
  }
};
