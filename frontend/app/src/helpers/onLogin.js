
export const onLogin = (user) => {
    const { email, password } = user;
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
  
    for (var key of formData.keys()) {
      console.log("MYKEY: ", key);
    }
  
    return fetch(`http://127.0.0.1:8000/api/user/login/`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        
        return response.json();
      })
      .catch((err) => console.log(err));
  };