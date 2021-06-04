import { getService } from "../../services/commonServices";

export class UserService {
  getAllUsers() {
    let url = `http://localhost:5000/api/users`;
    let data = getService(url);
    return data;
  }
}
