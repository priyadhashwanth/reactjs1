// todos loader
// loaders -> javascript functions
// it prepares the data before the component starts rendering

import axios from "axios";

// create a loader
const todosLoader = async () => {
    // perform the api call
    // to fetch the list of all todos
    const response = await axios
        .get('https://6996bab57d17864365751d3e.mockapi.io/todo')
    return response.data || [];
}

// export the loader
export default todosLoader;