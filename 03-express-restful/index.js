const express = require('express');
const Joi = require('joi');
const pick = require('lodash/pick');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 3000;
const courses = [
  { id: 1, name: 'course1'},
  { id: 2, name: 'course2'},
  { id: 3, name: 'course3'},
]

app.get('/ping', (req,res)=>{
  res.send('pong');
});

app.get('/api/courses', (req, res)=> {
  res.send(courses);
});

app.get('/api/courses/:id', (req,res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) res.status(404).send("The course was not found with the given id.");
  else res.send(course);
});

app.post('/api/courses', (req,res)=>{
  const {error} = validateCourse(req.body);

  if(error) return res.status(400).send(error.details[0].message);
  
  const course = {
    id: courses.length + 1,
    ...pick(req.body, ['name'])
  }

  courses.push(course);
  res.sendStatus(204);
})

app.put('/api/courses/:id', (req,res)=>{
  const course = courses.find(c=>c.id === +req.params.id);
  if(!course) return res.status(404).send("The course was not found with the given id.");
  
  const {error} = validateCourse(req.body);

  if(error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

app.delete('/api/courses/:id', (req,res) => {
  const course = courses.find(c=>c.id === +req.params.id);
  if(!course) return res.status(404).send("The course was not found with the given id.");

  courses.splice(courses.indexOf(course), 1);

  res.send(course);
})

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(course,schema);
}

app.get('/api/posts/:year/:month', (req,res)=>{
  res.send({
    params: {...req.params},
    query: {...req.query}
  });
})

app.listen(port, ()=> console.log(`Listening on port ${port}!`));