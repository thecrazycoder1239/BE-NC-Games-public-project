const express = require('express');
const app = express();
const { fetchCategories, fetchReviews, fetchReview, patchReview } = require('./controllers/get-controllers');
const { handlesServerErrors, handlesInvalidPath, handlesCustom404Errors, handles400Errors } = require('./error-handlers');

app.get('/api/categories', fetchCategories);

app.get('/api/reviews', fetchReviews)

app.get('/api/reviews/:review_id', fetchReview)

app.patch('/api/reviews/:review_id', patchReview)

app.use(handlesInvalidPath);
app.use(handlesCustom404Errors);
app.use(handles400Errors);
app.use(handlesServerErrors);

module.exports = app;