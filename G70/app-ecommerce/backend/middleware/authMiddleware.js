import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";

const checkAuth = async (req, res, next) => {
  //console.log(req.headers);
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // Intentar decifrar el JWT token
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //Almacena los datos del usuario dentro de nodejs
      req.usuario = await Usuario.findById(decoded.id).select(
        "-password -token -confirmado"
      );
      // Obtenemos el id del usuario extraido del jwt
      //console.log(decoded);
      //console.log(req.usuario);
      return next();
    } catch (error) {
      const e = new Error("Token no valido");
      return res.status(403).json({
        status: "error",
        msg: error.message,
        msgCatch: e.message,
      });
    }
  }
  
  if (!token) {
    const error = new Error("Token no valido o inexistente");
    res.status(403).json({
      status: "error",
      msg: error.message,
    });
  }
  next();
};

export default checkAuth;
