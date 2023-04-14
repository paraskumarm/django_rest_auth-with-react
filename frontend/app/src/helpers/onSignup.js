


export const onSignup = (user) => {
    let API="http://127.0.0.1:8000/api/user/";
    console.log(user);
    return fetch(API,{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };