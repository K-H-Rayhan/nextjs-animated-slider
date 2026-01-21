// /pages/api/update-feedback.js
import pool from '../../lib/database';

export default function handler(req, res) {
  if (req.method === 'PUT') {
    const { id, message } = req.body;

    pool.query(
      'UPDATE feedback SET message = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
      [message, id],
      (err, result) => {
        if (err) {
          res.status(500).json({ error: 'Failed to update feedback' });
        } else {
          res.status(200).json(result.rows[0]);
        }
      }
    );
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
