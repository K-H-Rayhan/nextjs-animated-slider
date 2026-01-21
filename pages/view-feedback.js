// /pages/view-feedback.js
import { useState, useEffect } from 'react';
import Header from '../components/Header';

const ViewFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingFeedback, setEditingFeedback] = useState(null); // State to manage the feedback being edited
  const [formData, setFormData] = useState({ name: '', email: '', message: '' }); // State for form inputs

  useEffect(() => {
    // Fetch feedback data from the API
    fetch('/api/get-feedback')
      .then((response) => response.json())
      .then((data) => {
        setFeedbacks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching feedback:', error);
        setLoading(false);
      });
  }, []);

  // Handle edit button click
  const handleEdit = (feedback) => {
    setEditingFeedback(feedback);
    setFormData({ name: feedback.name, email: feedback.email, message: feedback.message });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission for updating feedback
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/update-feedback', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: editingFeedback.id, ...formData }),
      });

      if (response.ok) {
        alert('Feedback updated successfully!');
        const updatedFeedback = await response.json();
        setFeedbacks((prev) =>
          prev.map((f) => (f.id === updatedFeedback.id ? updatedFeedback : f))
        );
        setEditingFeedback(null);
      } else {
        alert('Failed to update feedback.');
      }
    } catch (error) {
      console.error('Error updating feedback:', error);
    }
  };

  // Inside ViewFeedback component, ensure this function is added
  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this feedback?')) {
      try {
        const response = await fetch('/api/delete-feedback', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
        });

        if (response.ok) {
          alert('Feedback deleted successfully!');
          // Update the feedback list by filtering out the deleted item
          setFeedbacks(feedbacks.filter((f) => f.id !== id));
        } else {
          alert('Failed to delete feedback.');
        }
      } catch (error) {
        console.error('Error deleting feedback:', error);
      }
    }
  };

  // Manually adjust date and time to Malaysia Time (UTC+8) and format as dd/mm/yyyy hh:mm
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    
    // Adjust to Malaysia Time (UTC+8)
    const malaysiaOffset = 16 * 60; // Malaysia is UTC+8
    const localOffset = date.getTimezoneOffset(); // Get local time zone offset in minutes
    const adjustedDate = new Date(date.getTime() + (malaysiaOffset + localOffset) * 60 * 1000);

    // Format the adjusted date
    const day = String(adjustedDate.getDate()).padStart(2, '0');
    const month = String(adjustedDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = adjustedDate.getFullYear();
    const hours = String(adjustedDate.getHours()).padStart(2, '0');
    const minutes = String(adjustedDate.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  if (loading) {
    return <p>Loading feedback...</p>;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4 mt-20">Submitted Feedback</h1>
        {feedbacks.length > 0 ? (
          <ul className="space-y-4">
            {feedbacks.map((feedback) => (
              <li key={feedback.id} className="p-4 bg-white border rounded shadow-sm">
                <p><strong>Name:</strong> {feedback.name}</p>
                <p><strong>Email:</strong> {feedback.email}</p>
                <p><strong>Message:</strong> {feedback.message}</p>
                <p><strong>Submitted:</strong> {formatDateTime(feedback.created_at)}</p>
                <p><strong>Last Modified:</strong> {formatDateTime(feedback.updated_at)}</p>

                {/* Edit and Delete Buttons */}
                <button
                  onClick={() => handleEdit(feedback)}
                  className="mt-2 mr-2 px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(feedback.id)}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No feedback submitted yet.</p>
        )}

        {/* Edit Form Modal */}
        {editingFeedback && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <form
              onSubmit={handleUpdate}
              className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-md"
            >
              <h2 className="text-xl font-bold">Edit Feedback</h2>
              {/* <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 border rounded"
                required
              /> */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full p-2 border rounded"
                required
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setEditingFeedback(null)}
                  className="px-3 py-1 bg-gray-500 text-white rounded"
                >
                  Cancel
                </button>
                <button type="submit" className="px-3 py-1 bg-green-500 text-white rounded">
                  Update
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewFeedback;
