module.exports = function(app, dirname)
{
  app.get('/',(req , res) => { 
    res.sendFile(dirname + '/views/index.html');
  });
  app.get('/about',(req , res) => {
    res.sendFile(dirname + '/views/about.html'); 
  });
};