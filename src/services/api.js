export const fetchDataPost = async (id, body) => {
  const content = {
    body: body,
  };
  const response = await fetch(
    `http://localhost:3000/api/features/${id}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    }
  );

  if (!response.ok) {
    throw new Error("Error fetching data");
  }
};
