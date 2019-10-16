const express = require('express');

const server = express();

server.use(express.json());

server.use((req, res, next) => {
  console.time('Request');
  console.log(`Método: ${req.method}; URL: ${req.url}`);
  next();

  console.timeEnd('Request');
});

function isProjectExist(req, res, next) {
  const { id } = req.params;

  const project = projects.find((p) => p.id === id) || null;

  if (!project) {
    return res.status(400).json({ error: 'Id project not exist.' })
  }

  return next();
}

const projects = [
  { id: "1", title: 'Novo projeto 1', tasks: ["Tarefa projeto 1", "Tarefa projeto 1", "Tarefa projeto 1"] },
  { id: "2", title: 'Novo projeto 2', tasks: ["Tarefa projeto 2", "Tarefa projeto 2", "Tarefa projeto 2"] },
  { id: "3", title: 'Novo projeto 3', tasks: ["Tarefa projeto 3", "Tarefa projeto 3", "Tarefa projeto 3"] }
];

/** Lista todos os projetos e tarefas */
server.get('/projects', (req, res) => {
  return res.json(projects)
});

/** Cadastrar novo projeto */
server.post('/projects', (req, res) => {
  const project = req.body;

  projects.push(project);
  return res.json(projects);
});

/** Atualizando título do projeto */
server.put('/projects/:id', isProjectExist, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find((p) => p.id === id);
  project.title = title;

  return res.json(projects);
});

/** Cadastra tarefa para o projeto do id passado como parâmetro */
server.post('/projects/:id/tasks', isProjectExist, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find((p) => p.id === id);
  project.tasks.push(title);

  return res.json(project)
});

/** Deletar um projeto */
server.delete('/projects/:id', isProjectExist, (req, res) => {
  const { id } = req.params;

  let index;
  projects.forEach((pItem, pIndex) => {
    if (pItem.id === id) {
      index = pIndex;
    }
  });

  projects.splice(index, 1);

  return res.send();
});







server.listen(3000);