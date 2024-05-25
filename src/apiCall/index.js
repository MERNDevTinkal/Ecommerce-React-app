const customFetch = async (url, { body, ...rest }) => {
    const config = {
      ...rest,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    if (body) {
      config.body = JSON.stringify(body);
    }
    try {
      let response = await fetch(url, config);
      let data = await response.json();
      if (data) {
        return data;
      } else {
        throw new Error("data not fetched");
      }
    } catch (error) {
      console.log(error);
    }
  };
  export default customFetch;