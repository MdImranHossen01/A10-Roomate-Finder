import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import Loading from '../Components/Loading';

const MyListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserListings = async () => {
      if (!user?.email) return;

      try {
        const response = await fetch(`https://room-mate-finder-server.vercel.app/mylistings?email=${user.email}`);
        if (!response.ok) throw new Error('Failed to fetch listings');

        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to load your listings',
          icon: 'error',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserListings();
  }, [user]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`https://room-mate-finder-server.vercel.app/addlisting/${id}`, {
          method: 'DELETE',
        });
        const data = await response.json();

        if (data.deletedCount > 0) {
          setListings(listings.filter((listing) => listing._id !== id));
          Swal.fire('Deleted!', 'Your listing has been deleted.', 'success');
        }
      } catch (error) {
        Swal.fire('Error!', 'Failed to delete listing.', 'error');
      }
    }
  };

  if (loading) {
    return <div className="text-center py-8"><Loading></Loading></div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Listings</h1>

      {listings.length === 0 ? (
        <div className="text-center">
          <p className="text-lg mb-4">You haven't created any listings yet.</p>
          <Link to="/addroommate" className="btn btn-primary">
            Create Your First Listing
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-base-200 text-base font-semibold">
                <th>Photo</th>
                <th>Title</th>
                <th>Location</th>
                <th>Rent</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing) => (
                <tr key={listing._id} className="hover">
                  <td><img className='w-20' src={listing.photo} alt={listing.title} /></td>
                  <td>{listing.title}</td>
                  <td>{listing.location}</td>
                  <td>{listing.amount}</td>
                  <td>{listing.Availability}</td>
                  <td className="space-x-2">
                    <Link
                      to={`/updatelisting/${listing._id}`}
                      className="btn btn-sm btn-primary"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(listing._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyListings;
