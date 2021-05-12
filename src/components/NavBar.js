export default function NavBar(props) {
    
    return (
        
        <navigation className="NavBar">
           <h3>My navBar</h3>
           {props.children}
        </navigation>
        
    );
}