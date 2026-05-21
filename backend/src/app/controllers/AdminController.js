import AdminRepository from "../repository/AdminRepository.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

class AdminController {
  async Login(req, res) {
    try {
      const { nome, senha } = req.body;

      const usuarios = await AdminRepository.login(nome);

      if (usuarios.length === 0) {
        return res.status(401).json({
          erro: "Usuário ou senha inválidos!",
        });
      }

      const usuario = usuarios[0];

      const senhaValida = await bcrypt.compare(senha, usuario.senha);

      if (!senhaValida) {
        return res.status(401).json({
          erro: "Usuário ou senha inválidos!",
        });
      }

      const token = jwt.sign(
        {
          id: usuario.id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        },
      );

      return res.json({
        token,
        nome: usuario.nome,
      });
    } catch (err) {
      console.error(err);

      return res.status(500).json({
        erro: "Erro no login",
      });
    }
  }
}

export default new AdminController();
