import ApiService from "./api-service";
import { API_BASE } from "./../constants";

interface Service {
  get(url: string, conf?: object): Promise<any>;
}

class MastercalcService {
  private service: Service = new ApiService({ baseURL: API_BASE });

  get = async (url: string, config: object = {}) => {
    const response = await this.service.get(url, config);
    return response.data;
  };

  getTransitionCategory = async (category: string) =>
    this.get("/get_transitions", {
      params: {
        cat: category
      }
    });

  getTransitionCategoryState = async (category: string = "walls", type: string = "initial") =>
    this.get("/get_transitions", {
      params: {
        cat: category,
        ini_req: type
      }
    });
}

export default MastercalcService;
