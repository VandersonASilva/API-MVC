import { DataTypes } from "sequelize";
import db from "../config/database.js";
import User from "./userModels.js";

const Task = db.define(
  "Task",
  {
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  },
  {
    tableName: "tasks",
    timestamps: true,
  }
);

// relacionamentos:
User.hasMany(Task, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
// um usuário tem muitas tarefas

Task.belongsTo(User, { foreignKey: "user_id" });
// uma tarefa pertence a um usuário

export default Task;
