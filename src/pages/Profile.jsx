import { useState } from "react";
function Profile() {
    const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");

    // 2. Handler function that runs when the user selects a file
    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the first selected file
        if (file) {
            // Create a temporary URL for the selected file to preview it
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
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
                {/* Future: Add height, weight, goal settings here */}
            </div>
        </div>
    )
}

export default Profile;
