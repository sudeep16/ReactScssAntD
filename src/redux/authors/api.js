import { getService } from "../../services/commonServices";

export class AuthorService {
  getAllAuthors() {
    let url = `http://localhost:5000/api/authors`;
    let data = getService(url);
    return data;
  }
}
