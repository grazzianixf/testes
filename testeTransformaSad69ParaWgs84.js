const axios = require('axios');

    // xhr.open("POST", '', true);
// xhr.send("");     

axios.post('http://www.dpi.inpe.br/calcula/result.php?X=$ptx&Y=$pty&DATUM=$dat&PRJIN=$prjin&', {
    long_mc :-39,
    hemis : "sul",
    offX : 0,
    offY : 0,
    proj_out : "utm",
    DATUM_OUT : 4,
    Y : 9572692,
    X : 543350,
    DATUM : 1,
    PRJIN : "utm",
    action : "Avancar"
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });