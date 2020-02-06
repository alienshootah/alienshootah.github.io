const contentful = require("contentful");

export default contentful.createClient({
    space: process.env.REACT_APP_API_SPACE,
    acessToken: process.env.REACT_APP_ACCESS_TOKEN
});

// https://www.youtube.com/watch?v=LXJOvkVYQqA&t=7960s
// время 5 часов