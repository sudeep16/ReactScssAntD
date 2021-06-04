import { getService, postService } from "../../services/commonServices";

export class BookService {
  getAllBooks() {
    let url = `http://localhost:5000/api/books/allBooks`;
    let data = getService(url);
    return data;
  }

  deleteBook(id) {
    let url = `http://localhost:5000/api/books/book/${id}`;
    let data = postService(url, null, "DELETE");
    return data;
  }
}
