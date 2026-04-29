import Budget from '../models/Budget.js';

export const getBudgets = async (req, res) => {
  const budgets = await Budget.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(budgets);
};

export const createBudget = async (req, res) => {
  const budget = await Budget.create({ ...req.body, userId: req.user.id });
  res.status(201).json(budget);
};

export const deleteBudget = async (req, res) => {
  await Budget.deleteOne({ _id: req.params.id, userId: req.user.id });
  res.status(204).send();
};

export const analyticsByCategory = async (req, res) => {
  const analytics = await Budget.aggregate([
    { $match: { userId: req.user.id } },
    { $group: { _id: '$category', total: { $sum: '$amount' } } },
    { $sort: { total: -1 } },
  ]);

  res.json(analytics);
};
