module.exports = (request) => {
  let software = request.headers["user-agent"].match(/\(([^)]+)\)/i)[1];
  let language = request.headers["accept-language"].slice(0, 5);
  let address = request.headers['x-forwarded-for'] || 
     request.connection.remoteAddress || 
     request.socket.remoteAddress ||
     request.connection.socket.remoteAddress;

  let system = {
    "ipaddress":address,
    "language": language,
    "software": software
  };

  return system;

};
