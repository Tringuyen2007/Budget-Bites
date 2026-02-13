import { useState } from "react";
import './Profile.css';
function Profile() {
    // Load saved image from localStorage, or fall back to placeholder
    const [profileImage, setProfileImage] = useState(
        () => localStorage.getItem("profileImage") || "https://via.placeholder.com/150"
    );

    // handling function that runs when the user selects a file
    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the first selected file
        if (file) {
            // Convert file to base64 data URL so it can be saved in localStorage
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
                localStorage.setItem("profileImage", reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="app-container">
            <div className="card text-center" style={{ marginTop: '20px' }}>
                <h2>User Profile</h2>
                {/* 3. Display the current profile image */}
                <div className="profile-image-container">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="profile-image"
                    />
                </div>

                <p>Welcome to your profile!</p>

                {/* 4. Input to choose a new image */}
                <div className="upload-btn-container">
                    <label className="upload-btn">
                        Change Photo
                        {/* Hidden input, triggered by the label */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden-input"
                        />
                    </label>
                </div>
                {/* TODO: Add height, weight, goal settings */}
            </div>
        </div>
    )
}

export default Profile;
