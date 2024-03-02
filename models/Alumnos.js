import { resolve } from "path";
import conexion from "./conexion.js";
import { request } from "http";
import { rejects } from "assert";

var alumnoDb = {}
alumnoDb.insertar = function insertar(alumno){
    return new Promise((resolve,rejects)=>{
        //consulta
        let sqlConsulta = "Insert into alumnos set ?";
        conexion.query(sqlConsulta,alumno,function(err,res){
            if(err){
                console.log("Surgió un error: " + err.message);
                rejects(err);
            }
            else{
                const alumno = {
                    id:res.id,

                }
                resolve(alumno);
            }
        });
    });
}

alumnoDb.mostrarTodos = function(){
    return new Promise((resolve,rejects)=>{
        let sqlConsulta = "Select * from alumnos";
        conexion.query(sqlConsulta,null,function(err,res){
            if(err){
                console.log("Ocurrio un error: ", err);
                rejects(err);
            }
            else{
                resolve(res);
            }
        });
    });
}


export default alumnoDb;