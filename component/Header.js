
import { Link } from "react-router"
 export const Header=()=>{
    


 
    return(
        <header className="header">

        <div class="logo">
            <img src="https://thumbs.dreamstime.com/b/cheerful-food-logo-featuring-green-leaves-spoon-symbolizing-health-freshness-set-against-clean-white-background-348485247.jpg"/>
            <h1 class="h1">Food Safari</h1>
        </div>
    
      
        <ul class="nav-links">
          <Link to="/"> <li>Home</li></Link> 
          <Link to="/about"><li>About</li></Link>  
          <Link to="/contacts"> <li>Contact</li></Link>
        </ul>
    </header>
    )

}




   
  