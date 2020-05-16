const request = (url, options) =>
  fetch(`https://pre.api.autonomos.app/api/${url}`, {
    ...options,
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      return response.json().then((error) =>
        Promise.reject({
          status: response.status,
          error,
        })
      );
    }
  });

export default request;
