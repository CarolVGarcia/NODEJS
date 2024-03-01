import express from 'express';
import json from 'body-parser';

export const router = express.Router();

router.get('/', (req, res)=>{

    res.render('index',{titulo:"Mis practicas js", nombre:"Vazquez Garcia Carol"})


})

router.get('/tabla',(req,res)=>{
    //parametros
    const params = {
        numero:req.query.numero
    }
    res.render ('tabla',params)
})

router.post('/tabla',(req,res)=>{
    //parametros
    const params = {
        numero:req.body.numero 
    }
    res.render ('tabla',params)
})

router.get("/cotizacion", (req, res) => {
    const params = {
      valor: req.query.valor,
      pInicial: req.query.pInicial,
      plazos: req.query.plazos,
      folio: req.query.folio,
      descripcion: req.query.descripcion,
    };
    res.render("cotizacion", params);
  });
  
  router.post("/cotizacion", (req, res) => {
    const params = {
      valor: req.body.valor,
      pInicial: req.body.pInicial,
      plazos: req.body.plazos,
      folio: req.body.folio,
      descripcion: req.body.descripcion,
    };
    res.render("cotizacion", params);
  });
  
router.post('/tabla',(req,res)=>{

})
let rows;

router.get('/alumnos',async(req,res)=>{

    rows = await alumnosDb.mostrarTodos();
    res.render('alumnos',{reg:rows});
})









export default {router}

