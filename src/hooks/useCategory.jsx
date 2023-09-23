import axios from "axios";
import { useQuery } from "react-query";

function useCategories() {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const fetchCategories = async () => {
    const response = await axios.get(
      "https://backend.getlinked.ai/hackathon/categories-list",
      config
    );

    if (response.status === 200) {
      return response;
    }

    throw response.data.error;
  };

  return useQuery(["categories"], fetchCategories, {
    retryOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}

export default useCategories;
