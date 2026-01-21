// /pages/api/get-feedback.js
import pool from '../../lib/database';

export default function handler(req, res) {
  if (req.method === 'GET') {
    pool.query('SELECT * FROM feedback ORDER BY id DESC', (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Failed to retrieve feedback' });
      } else {
        res.status(200).json(result.rows);
      }
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
