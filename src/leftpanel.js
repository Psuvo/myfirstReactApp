import React from 'react';
import ReactDOM from 'react-dom';
import './leftpanel.scss';
import $ from "jquery";


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

class LeftPanel extends React.Component {
  render() {
    return <div class="left-panel" onClick={this.handleClick}>
      <ul>
        <li>
          <div class="item-list">
            <div class="item-list-img">
              <img class="img-responsive" src={images["text.png"]["default"]} />
            </div>
            <label>Dashboard</label>
          </div>
        </li>
        <li>
          <div class="item-list">
            <div class="item-list-img">
              <img class="img-responsive" src={images["group.png"]["default"]} />
            </div>
            <label>Organisation</label>
          </div>
        </li>
        <li>
          <div class="item-list active">
            <div class="item-list-img">
              <img class="img-responsive" src={images["mission1.png"]["default"]} />
            </div>
            <label>Missions</label>
          </div>
        </li>
        <li>
          <div class="item-list">
            <div class="item-list-img">
              <img class="img-responsive" src={images["user.png"]["default"]} />
            </div>
            <label>User</label>
          </div>
        </li>
        <li>
          <div class="item-list">
            <div class="item-list-img">
              <img class="img-responsive" src={images["group.png"]["default"]} />
            </div>
            <label>Create User Group</label>
          </div>
        </li>
        <li>
          <div class="item-list">
            <div class="item-list-img">
              <img class="img-responsive" src={images["menu.png"]["default"]} />
            </div>
            <label>User Group List</label>
          </div>
        </li>
        <li>
          <div class="item-list">
            <div class="item-list-img">
              <img class="img-responsive" src={images["data.png"]["default"]} />
            </div>
            <label>Data</label>
          </div>
        </li>
        <li>
          <div class="item-list">
            <div class="item-list-img">
              <img class="img-responsive" src={images["control-center.png"]["default"]} />
            </div>
            <label>Control Center</label>
          </div>
        </li>
        <li>
          <div class="item-list">
            <div class="item-list-img">
              <img class="img-responsive" src={images["assets.png"]["default"]} />
            </div>
            <label>Assets</label>
          </div>
        </li>
      </ul>
    </div>
  }


handleClick(event) {
  $(".left-panel ul li .item-list").removeClass("active");
  $(event.target).addClass("active");
};
}



export default LeftPanel;