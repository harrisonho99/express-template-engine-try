exports.get404 = (_, res) => {
  res.status(404).render('not-found', {
    pageTitle: 'Not Found!',
  });
};
