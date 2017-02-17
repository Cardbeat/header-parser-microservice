module.exports = (request) => {
  let software = request.headers["user-agent"].match(/\(([^)]+)\)/i)[1];
  let language = request.headers["accept-language"].slice(0, 5);
  let address = request.ip.match(/\d+.\d+.\d+.\d+/i)[0];

  let system = {
    "ipaddress": address,
    "language": language,
    "software": software
  };

  return system;

};
