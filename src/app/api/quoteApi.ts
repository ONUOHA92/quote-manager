import axios from "axios";

export const createQuote = async (quoteData: any) => {
  const response = await axios.post(
    "https://test-api.oneport365.com/api/admin/quotes/assessment/create",
    quoteData
  );
  return response.data;
};
