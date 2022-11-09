function About() {
  return (
    <div className="container pt-4">
      <h1 className="display-1 text-center">About</h1>
      <br />
      <div className="container">
        <h4 className="fw-normal">Goal</h4>
        <p>
          My goal for this project was to create a flashcard app to help me
          revise topics during my computer science study as well as gaining
          experience developing a fullstack project with the frontend, server
          and backend using the <b>MERN stack</b>. The choice to implemented the
          MERN stack <b>(MongoDB , Express, React, NodeJS)</b> was in part to
          streamline production by avoiding the need of an alternate language
          other than <b>JavaScript</b>, as well as wanting to take advantage of
          the power of React and test a NoSQL database like MongoDB.
        </p>
        <h4 className="fw-normal">Frontend</h4>
        <p>
          Utilising <b>React</b> for the fronted, I have used <b>React hooks</b>{" "}
          - <b>setState</b> and <b>useEffect</b> - to implement the UI
          interactivity and control the display of data. A benefit of working in
          React is the ability to reuse components, such as the deck filter
          display, that saves from duplicating code. <b>Bootstrap</b> was used
          for styling to speed up the development process, as I wanted to focus
          on the functionality of the app rather than a custom visual, that
          would be more time consuming to complete.
        </p>
        <h4 className="fw-normal">Backend</h4>
        <p>
          To implement the server using <b>NodeJS</b> I have developed a{" "}
          <b>RESTful API</b> to create, read, update and delete cards from the
          MongoDB database. The speed to access the database is reasonable
          considering its running on the free tier. Creating this project has
          deepened my knowledge of fullstack development especially in creating
          a REST API used to connect the React frontend to a MongoDB database on
          the backend.
        </p>
      </div>
    </div>
  );
}

export default About;
