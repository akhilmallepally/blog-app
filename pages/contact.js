export default function Contact() {
    return(
        <div>
            <h3>
                Send me your details. Let's connect
            </h3>
      <form action="/api/form" method="post">
      <label htmlFor="first">First Name</label>
      <input type="text" id="first" name="first" required />

      <label htmlFor="last">Last Name</label>
      <input type="text" id="last" name="last" required />
      <label htmlFor="last">Contact</label>
      <input type="text" id="last" name="last" required />
      <button type="submit">Submit</button>
    </form>
        </div>
    )
}