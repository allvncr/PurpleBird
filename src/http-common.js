import axios from "axios"
import domain from "@/environment";

export default axios.create({
    baseURL: domain,

  headers: {
    "Content-type": "application/json"
  }
})