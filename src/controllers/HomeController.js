import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Alan',
      sobrenome: 'Coimbra',
      email: 'al_coimbra@hotmail.com',
      idade: 32,
      peso: 90,
      altura: 1.75,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
