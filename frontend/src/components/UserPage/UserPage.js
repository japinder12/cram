import pic from "./oski-pic.png"

const UserPage = () => {
	return (
	<div className="user">
		<h2>Welcome, John Doe!</h2>
      	<div className="user-info">
			<div class="image-cropper">
        		<img src={pic} alt="Profile Picture" class="profile-pic"/>
		   	</div>
        	<p>Email: john.doe@example.com</p>
        	<p>Username: johndoe123</p>
      	</div>
		<div className="overlap-group">
			<div className="ellipse" />
			<div className="rectangle" />
			<div className="div" />
			<div className="rectangle-2" />
			<div className="overlap">
			<div className="rectangle-3" />
			<div className="rectangle-3" />
			</div>
		</div>
		<div className="ellipse-2" />
		<div className="overlap-2">
			<div className="rectangle-4" />
			<div className="text-wrapper">Search...</div>
		</div>
		<div className="rectangle-5" />
		<div className="div-wrapper">
			<div className="text-wrapper-2">Start ChatBot</div>
		</div>
		<div className="rectangle-6" />
		<div className="rectangle-7" />
		<div className="rectangle-8" />
	</div>
  );
}

export default UserPage

