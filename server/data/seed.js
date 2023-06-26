// seeds.js

const User = require('../models/User');
const Project = require('../models/Project');
const Task = require('../models/Task');
const Comment = require('../models/Comment');

async function seedDatabase() {
  // Create Users
  const users = await User.bulkCreate([
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ]);

  // Create Projects
  const projects = await Project.bulkCreate([
    {
      name: 'project1',
      description: 'project1 description',
      userId: users[0].id
    },
    {
      name: 'project2',
      description: 'project2 description',
      userId: users[0].id
    }
  ]);

  // Create Tasks
  const tasks = await Task.bulkCreate([
    {
      title: 'task1',
      description: 'task1 description',
      status: 'pending',
      projectId: projects[0].id
    },
    {
      title: 'task2',
      description: 'task2 description',
      status: 'in_progress',
      projectId: projects[0].id
    }
  ]);

  // Create Comments
  const comments = await Comment.bulkCreate([
    { content: 'comment1', taskId: tasks[0].id },
    { content: 'comment2', taskId: tasks[0].id }
  ]);

  console.log('Seeding complete.');
}

seedDatabase();
