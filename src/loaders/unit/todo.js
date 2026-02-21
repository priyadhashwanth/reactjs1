import axios from "axios";

const todoLoader = async ({ request }) => {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    const response = await axios.get(`https://6996bab57d17864365751d3e.mockapi.io/todo/${id}`);
    return response.data || {};
}

export default todoLoader;