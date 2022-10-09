const handler = async (req, res) => {
  if (req.method === 'GET') {
    const twitterRes = await fetch(
      'https://api.twitter.com/2/tweets/search/recent?query=from:daolens -is:reply',
      {
        headers: {
          Authorization:
            'Bearer AAAAAAAAAAAAAAAAAAAAAGe%2BhwEAAAAAhOeE0PkOfldxnmLUhVEDLMpYpd4%3D5WJAoEZpEjKimoutuhwHtzNuPkcpbz5lQF8UiaPTq9aYy1UNzb',
        },
      }
    );

    const data = await twitterRes.json();

    if (twitterRes.ok) {
      res.status(200).json(data);
    } else {
      res.status(403).json({ message: 'sorry' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default handler;
