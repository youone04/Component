export default function FooterComp(){
    return(
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-section about">
                <h2>About Us</h2>
                <p>We are a team of passionate developers dedicated to creating beautiful and functional web applications.</p>
            </div>
            <div className="footer-section links">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-section contact">
                <h2>Contact Us</h2>
                <p>Email: info@example.com</p>
                <p>Phone: +123 456 7890</p>
                <p>Address: 123 Example Street, City, Country</p>
            </div>
        </div>
        <div className="footer-bottom">
            &copy; 2024 YourCompany | Designed by YourName
        </div>
    </footer>
    )
}