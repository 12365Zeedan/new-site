export const getDashboard = async (_req, res) => {
  res.json({
    totals: {
      orders: 0,
      products: 0,
      posts: 0,
      customers: 0
    },
    message: 'Dashboard metrics will be aggregated here.'
  });
};
