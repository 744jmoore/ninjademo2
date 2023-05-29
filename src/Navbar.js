const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Learning React</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",                    
                    backgroundColor: "blue"
                }}>New stuff</a>
            </div>
        </nav>
    );
}
 
export default Navbar;