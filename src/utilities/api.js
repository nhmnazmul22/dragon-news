export const fetchCategories = async () => {
  try {
    const response = await fetch("/categories.json");
    const contentType = response.headers.get("content-type") || "";

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    if (!contentType.includes("application/json")) {
      throw new Error(
        "Invalid response type: expected JSON, got HTML or other."
      );
    }

    return response.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return Promise.reject({
      message:
        err.message === "Failed to fetch"
          ? "Unable to reach the server. Please check your connection."
          : err.message || "Error fetching categories data.",
    });
  }
};

export const fetchNewses = async () => {
  try {
    const response = await fetch("/news.json");
    const contentType = response.headers.get("content-type") || "";

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    if (!contentType.includes("application/json")) {
      throw new Error(
        "Invalid response type: expected JSON, got HTML or other."
      );
    }

    return response.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return Promise.reject({
      message:
        err.message === "Failed to fetch"
          ? "Unable to reach the server. Please check your connection."
          : err.message || "Error fetching news data.",
    });
  }
};
