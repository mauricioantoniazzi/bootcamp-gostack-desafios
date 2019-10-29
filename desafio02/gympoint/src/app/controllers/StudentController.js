import * as Yup from 'yup';

import Student from '../models/Students';

class StudentController {
  async store(req, res) {
    // const { name, email, idade, peso, altura } = req.body;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .required()
        .email(),
    });

    /**
     * Valida entrada de dados
     */
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    /**
     * Verificar se já existe este email cadastrado para um estudante
     */
    const studentExist = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExist) {
      return res.status(400).json({ error: 'Student already exist' });
    }

    const { id, name, email, idade, peso, altura } = await Student.create(
      req.body
    );

    return res.json({ id, name, email, idade, peso, altura });
  }

  async update(req, res) {
    const { id } = req.params;

    /**
     * Verifica se estudante existe
     */
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(400).json({ error: 'Student is not exist' });
    }

    const {
      idStudent,
      name,
      email,
      idade,
      peso,
      altura,
    } = await student.update(req.body);

    return res.json({
      id: idStudent,
      name,
      email,
      idade,
      peso,
      altura,
    });
  }
}

export default new StudentController();
