import './Home.css';
// import logo from "../../assets/panoramas_cover.jpg";

function Home() {

    const tags = [
        { text: "About Us", href: "/about", top: "20%", left: "30%" },
        { text: "Photos", href: "/photos", top: "50%", left: "60%" },
        { text: "Contact", href: "/contact", top: "75%", left: "40%" }
    ];

    return (
        <div className="landing-container">
            <img
                src="https://images.unsplash.com/photo-1541422348463-9bc715520974?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Background"
                className="background-image"
            />
            <h1 className='landing-title'>emir chacra</h1>
            {tags.map((tag, index) => (
                <a
                    key={index}
                    href={tag.href}
                    className="tag"
                    style={{ top: tag.top, left: tag.left }}
                >
                    {tag.text}
                </a>
            ))}
        </div>
    );
}

export default Home;