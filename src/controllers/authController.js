export default async function register(req, res) {
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
