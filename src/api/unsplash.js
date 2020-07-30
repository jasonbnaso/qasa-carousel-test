import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",

  headers: {
    Authorization: "Client-ID xHo07jQNA4A5UmK6bqJuncyQ6FJm4U4VgBXOcxMuwn8",
  },
});