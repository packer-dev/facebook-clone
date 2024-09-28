import { API_URL } from "@/constants/Config";

export const getNsvbarAmountNew = async (user_id: string) => {
  return fetch(`${API_URL}/navabar/amount?user_id=${user_id}`).then((res) =>
    res.json()
  );
};
