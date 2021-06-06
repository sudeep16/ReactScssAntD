import { getService, postService } from "../../services/commonServices";

export class UserService {
  getAllUsers() {
    let url = `http://localhost:5000/api/users`;
    let data = getService(url);
    return data;
  }

  deleteUser(id) {
    let url = `http://localhost:5000/api/users/user/${id}`;
    let data = postService(url, null, "DELETE");
    return data;
  }
}
