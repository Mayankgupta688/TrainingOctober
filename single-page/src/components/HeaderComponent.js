export default function HeaderComponent() {
    return (
        <div>
            <h1>This is Header Component</h1>
            <nav>
                <a style={{"marginRight": "15px"}} href="/">Home</a>
                <a style={{"marginRight": "15px"}} href="/help">Help</a>
                <a style={{"marginRight": "15px"}} href="/about">About</a>
            </nav>
        </div>
    )
}