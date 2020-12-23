const axios = require("axios");

const api = (data,callback) =>{
    axios
      .post(data.url, data.data)
      .then((res) => {
          if(!res.data.success){
              callback(res.data.message,null)
          } else{
              callback(null,res.data)
          }
        // props.toggleIsLoading(false);
        // console.log(res, props);
      })
      .catch((error) => {
        callback(error,null)
      });
}

export default api