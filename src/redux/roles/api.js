import { getService } from "../../services/commonServices";

export class RoleService {
  getAllRoles() {
    let url = `http://localhost:5000/api/roles/role`;
    let data = getService(url);
    return data;
  }
}
