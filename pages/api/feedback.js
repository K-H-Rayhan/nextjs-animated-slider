// /pages/api/feedback.js
import pool from '../../lib/database';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const result = await pool.query(
        'INSERT INTO feedback (name, email, message) VALUES ($1, $2, $3) RETURNING *',
        [name, email, message]
      );
      res.status(200).json(result.rows[0]);
    } catch (err) {
      console.error('Error inserting feedback:', err);
      res.status(500).json({ error: 'Failed to submit feedback.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
