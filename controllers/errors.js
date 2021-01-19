exports.get404 = (_, res) => {
  res.status(404).render('public/not-found', {
    pageTitle: 'Not Found!',
  });
};
