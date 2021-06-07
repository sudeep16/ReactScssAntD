import { getService, postService } from "../../services/commonServices";

export class RoleService {
  getAllRoles() {
    let url = `http://localhost:5000/api/roles/role`;
    let data = getService(url);
    return data;
  }

  deleteRole(id) {
    let url = `http://localhost:5000/api/roles/role/${id}`;
    let data = postService(url, null, "DELETE");
    return data;
  }
}
