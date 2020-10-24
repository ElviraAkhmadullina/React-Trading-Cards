"use strict";

function Homepage() {
  return (
    <div>
      <p>Greetings user!!! Welcome to Ballonicorn's trading card colloection page.</p>

      <a href="/cards">Please clicke this link to view the cards.</a>
      <img src="/static/img/balloonicorn.jpg" /> 

    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
