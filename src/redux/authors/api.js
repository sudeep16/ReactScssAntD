import { getService, postService } from "../../services/commonServices";

export class AuthorService {
  getAllAuthors() {
    let url = `http://localhost:5000/api/authors`;
    let data = getService(url);
    return data;
  }

  addAuthor(bodu) {
    let url = `http://localhost:5000/api/author`;
    let data = postService(url, body);
    return data;
  }
}
