import Axios from "../../Axios";

export const getMangers = async () => {
    try {
      const response = await Axios.get("/managers?populate=*");
      return response;    
    } catch (error) {
      return error;
    }
  };