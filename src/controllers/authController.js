import * as authService from "../services/authService.js";

export async function register(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Nome, email e senha são obrigatórios." });
  }

  try {
    const user = await authService.register({ name, email, password });
    res.status(201).json({ message: "Usuário cadastrado com sucesso.", user });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Erro ao criar usuário.", error });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }
  try {
    const result = await authService.login({ email, password });
    res.json({
      message: "Login realizado com sucesso.",
      token: result.token,
      user: result.user,
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Falha de autenticação.", error });
  }
}
