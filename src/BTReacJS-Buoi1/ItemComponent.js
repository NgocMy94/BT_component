import React, { Component } from "react";

class ItemComponent extends Component {
  render() {
    return (
      <div className="iTems row">
        <div className="col-6 item">
          <div className="item_Icon">
          <i class="fab fa-dev"></i>
          </div>
          <div className="item_Content">
            <h2>Fresh new layout</h2>
            <p>
              With Bootstrap 5, we've created a fresh new layout for <br /> this
              template!
            </p>
          </div>
        </div>
        <div className="col-6 item">
          <div className="item_Icon">
            <i className="fab fa-dev" />
          </div>
          <div className="item_Content">
            <h2>Free to download</h2>
            <p>
              As always, Start Bootstrap has a powerful collectin of <br /> free
              templates.
            </p>
          </div>
        </div>
        <div className="col-6 item">
          <div className="item_Icon">
            <i className="fab fa-dev" />
          </div>
          <div className="item_Content">
            <h2>Jumbotron hero header</h2>
            <p>
              he heroic part of this template is the jumbotron hero <br />{" "}
              header!
            </p>
          </div>
        </div>
        <div className="col-6 item">
          <div className="item_Icon">
            <i className="fab fa-dev" />
          </div>
          <div className="item_Content">
            <h2>Feature boxes</h2>
            <p>
              We've created some custom feature boxes using <br /> Bootstrap
              icons!
            </p>
          </div>
        </div>
        <div className="col-6 item">
          <div className="item_Icon">
            <i className="fab fa-dev" />
          </div>
          <div className="item_Content">
            <h2>Simple clean code</h2>
            <p>
              We keep our dependencies up to date and squash bugs <br /> as they
              come!
            </p>
          </div>
        </div>
        <div className="col-6 item">
          <div className="item_Icon">
            <i className="fab fa-dev" />
          </div>
          <div className="item_Content">
            <h2>A name you trust</h2>
            <p>
              Start Bootstrap has been the leader in free Bootstrap <br />{" "}
              templates since 2013!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemComponent;
