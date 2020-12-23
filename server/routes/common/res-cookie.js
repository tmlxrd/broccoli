const resCookie = (res, data) => {
  console.log(data)
  if (data === null) {
    res.clearCookie('id')
    res.clearCookie("role");
  } else {
    res.cookie("id", data.id);
    res.cookie("role", data.role);
  }
};

module.exports = resCookie;
