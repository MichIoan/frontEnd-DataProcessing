import './ProfilePage.css'; // Import your styles

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <header>
        <h1>Netflix Profile Page</h1>
      </header>
      <section className="profile-details">
        <img
          className="profile-picture"
          src="https://placekitten.com/200/200" // Replace with your profile picture URL
          alt="Profile"
        />
        <div className="profile-info">
          <h2>John Doe</h2> {/* Replace with the user's name */}
          <p>Email: john@example.com</p> {/* Replace with the user's email */}
          <p>Plan: Premium</p> {/* Replace with the user's subscription plan */}
        </div>
      </section>
      <section className="viewing-activity">
        <h2>Viewing Activity</h2>
        {/* Display user's viewing activity */}
        {/* You can fetch and display data dynamically here */}
        <ul>
          <li>Movie 1</li>
          <li>TV Show 1</li>
          {/* Add more items as needed */}
        </ul>
      </section>
    </div>
  );
};

export default ProfilePage;
