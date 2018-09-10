import React from "react";

import MainLeft from "./mainLeft";
import MainRight from "./mainRight";

class Main extends React.Component {
  render () {
    return (
      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Exciting tours for adventurous people
            </h2>
          </div>

          <div className="row">
            {MainLeft()}
            {MainRight()}
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
