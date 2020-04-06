var bodyParser = require('body-parser'),
    http  = require ('http'),
    express = require ('express'),
    Router = express.Router(),
    jquery = require ('jquery'),
    io = require('socket.io',
    public  = require ('../public'));

    Router.get("/ciudades", (req, res)=>{
      public.getData('ciudades')
            .then(ciudades=>{
              var ciudadesFiltradas =[];
              ciudades.forEach(function(ciudad){
                if(ciudadesFiltradas.indexOf(ciudad.Ciudad)<0){
                  ciudadesFiltradas.push(ciudad.Ciudad);
                }
              })
              res.json(ciudadesFiltradas)
            })
            .catch(error=>{
              res.sendStatus(500).json(error);
            })
    })

Router.get("/tipos", (req, res)=>{
  public.getData('tipos')
          .then(tipos=>{
            var tiposViviendaFiltradas =[];
            tipos.forEach(function(tipo){
              if (tiposViviendaFiltradas.indexOf(tipo.Tipo)<0){
                tiposViviendaFiltradas.push(tipo.Tipo);
              }

          })
          res.json(tiposViviendaFiltradas)
        })
        .catch(error=>{
          res.sendStatus(500).json(error);
        })
})

Router.get("/inmuebles", (req, res)=>{
  public.getData('inmuebles')
        .then(inmuebles=>{
          res.json(inmuebles)
        })
        .catch(error=>{
          res.sendStatus(500).json(error);
        })
})
module.exports = Router;
