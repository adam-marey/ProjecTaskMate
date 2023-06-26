const User = require('./User');
const Project = require('./Project');
const Task = require('./Task');
const Comment = require('./Comment');

// relationships
User.hasMany(Project);
Project.belongsTo(User);

Project.hasMany(Task);
Task.belongsTo(Project);

Task.hasMany(Comment);
Comment.belongsTo(Task);
