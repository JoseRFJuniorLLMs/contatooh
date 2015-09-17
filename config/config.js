module.exports = function() {
  var nodeDev = process.env.NODE_DEV == undefined ? 'development' : process.env.NODE_DEV;
  return require('./env/' +  nodeDev + '.js');
};
