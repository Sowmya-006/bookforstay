import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    const fetchDataFromDashboard = async () => {
      try {
        // Add your logic to fetch data from the dashboard
        // For example, you can use the Fetch API or AJAX here
        const response = await fetch('your_dashboard_data_endpoint');
        const data = await response.json();

        console.log('Data from the dashboard:', data);
        // Process the fetched data as needed
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const bookNowButton = document.getElementById('bookNowButton');
    bookNowButton.addEventListener('click', fetchDataFromDashboard);

    return () => {
      // Cleanup the event listener when the component is unmounted
      bookNowButton.removeEventListener('click', fetchDataFromDashboard);
    };
  }, []); // Empty dependency array ensures the effect runs only once during mount

  const handleBookNow = () => {
    // Implement your book now logic here
    console.log('Book Now clicked');

    // Use the useNavigate hook to navigate to the Dashboard
    navigate('/Dashboard');
  };

  return (
    <div>
      <header>
      <script
       src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.0/gsap.min.js">
      </script>
        <h1 id="split">Book For Stay!</h1>
        <h3><b>Explore our offerings and book your experience now.</b></h3>

        <div className="container">
          <div className="button" id="bookNowButton" onClick={handleBookNow}>
            <div className="line-container">
              <span className="text">Book Now</span>
              <div className="line line--top-left line--thick thick-line--short"></div>
              <div className="line line--top-right line--thick thick-line--short"></div>
              <div className="line line--bottom-left line--thick thick-line--long"></div>
              <div className="line line--bottom-right line--thick thick-line--long"></div>
              <div className="line line--top line--thin"></div>
              <div className="line line--bottom line--thin"></div>
            </div>
          </div>
        </div>
      </header>

      <footer>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="2x" className="footer-icon" />
          &nbsp;&nbsp;&nbsp; {/* Add non-breaking spaces for spacing */}
          <FontAwesomeIcon icon={faFacebook} size="2x" className="footer-icon" />
          &nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faTwitter} size="2x" className="footer-icon" />
        </div> 
        <h3><b>&copy; 2023 Sowmya Venkat. All rights reserved.</b></h3>
      </footer>
    </div>
  );
};

export default HomePage;
