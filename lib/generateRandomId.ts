export const generateRandomNewsArticleId = () => {
  const randomString = Math.random().toString(36).substr(2, 9);
  const articleId = `news/${randomString}`;

  return articleId;
};
