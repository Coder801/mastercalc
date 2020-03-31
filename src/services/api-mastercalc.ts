import ApiService from "./api-service";
import { API_BASE } from "./../constants";

interface Service {
  get(url: string, conf?: object): Promise<any>;
}

class MastercalcService {
  private service: Service = new ApiService({ baseURL: API_BASE });

  getTransitions = async (url: string, config: object = {}) => {
    const response = await this.service.get(url, config);
    return response.data;
  };

  getTransitionsCategory = async (params = {}) => {
    return this.getTransitions("/get_transitions", params);
  };
}

export default MastercalcService;
