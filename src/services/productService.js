import axios from "axios";

export default class ProductService {
    getProducts() {
        return axios.get("http://localhost:8080/api/products/getall")
    }

    getProductById(id) {
        return axios.get("http://localhost:8080/api/products/getbyid?id=" + id)
    }

    getByProductName(productName) {
        return axios.get("http://localhost:8080/api/products/getbyproductname?productName=" + productName)
    }
}