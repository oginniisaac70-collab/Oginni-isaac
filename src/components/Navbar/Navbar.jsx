import "./Navbar.css";

export default function Navbar(){
    return(
     <nav className="nav">
       <h1>Prince Gaming</h1>

<ul className="nav-links">
         <li>Home</li>
         <li>Games</li>
         <li>About</li>
         <li>Contact</li>
        

       </ul>
       <button className="Login-btn">Login</button>
     </nav>
    );
}         