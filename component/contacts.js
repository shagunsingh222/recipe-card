export const Contact=()=>{
    return(
        <>
        <div className="container">
        <h2> contact page</h2>
        <form>
        <input type="text" name="name" placeholder="Your Name" required/>
        <input type="email" name="email" placeholder="Your Email" required/>
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </div>
        </>
    )
}