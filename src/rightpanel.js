import React from 'react';
import ReactDOM from 'react-dom';
import './rightpanel.scss';
import $ from "jquery";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

class RightPanel extends React.Component {
  render() {
    return <div class="right-panel">
      <header>
        <div class="left-text">
          <div class="text">
            <h3>Request a Mission!</h3>
            <label>Here you can create a job and monitor its progress!</label>
          </div>
        </div>
        <div class="right-text">
          <button>
            <div class="btn-img">
              <img class="img-responsive" src={images["mission1.png"]["default"]} />
            </div>
            <div class="btn-text">Add New Mission</div>
          </button>
        </div>
      </header>
      <div class="filter-section">
        <div class="filter-options" onClick={this.handleClick}>
          <ul>
            <li class='selected'>All</li>
            <li>Upcoming</li>
            <li>In Progress</li>
            <li>To be reviewed</li>
            <li>Completed</li>
          </ul>
        </div>
      </div>
      <div class="tablelist">
        <table>
          <tr>
            <th>MISSION</th>
            <th>ORDER DATE</th>
            <th>MISSION ID</th>
            <th>Created By</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
          <tr>
            <td>
              <div>
              &#9992;
              <p>TestMissionDevAndroid</p>
              </div>
            </td>
            <td>08-03-2021</td>
            <td>5ff940fad674035b4472d6de</td>
            <td>NKDA</td>
            <td><label>COMPLETED</label></td>
            <td>
              <div class="lastfield">
                <div class="eye">
                    &#128065;
                </div>
                <div class="bin">
                  &#128465;
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
              &#9992;
              <p>DemoInstant</p>
              </div>
            </td>
            <td>02-04-2021</td>
            <td>5ff950fad674035b4472d6def</td>
            <td>Osama</td>
            <td><label>COMPLETED</label></td>
            <td>
              <div class="lastfield">
                <div class="eye">
                    &#128065;
                </div>
                <div class="bin">
                  &#128465;
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
              &#9992;
              <p>AG Block</p>
              </div>
            </td>
            <td>02-04-2021</td>
            <td>3ff950fad674045b4472d6gef</td>
            <td>Osama</td>
            <td><label>COMPLETED</label></td>
            <td>
              <div class="lastfield">
                <div class="eye">
                    &#128065;
                </div>
                <div class="bin">
                  &#128465;
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
              &#9992;
              <p>AMPVaishaki</p>
              </div>
            </td>
            <td>21-04-2021</td>
            <td>7gt950fbd674035b4472d6def</td>
            <td>NKDA</td>
            <td><label>COMPLETED</label></td>
            <td>
              <div class="lastfield">
                <div class="eye">
                    &#128065;
                </div>
                <div class="bin">
                  &#128465;
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
              &#9992;
              <p>My special flight</p>
              </div>
            </td>
            <td>22-04-2021</td>
            <td>5ff956hhad674035b4472d6def</td>
            <td>NKDA</td>
            <td><label>COMPLETED</label></td>
            <td>
              <div class="lastfield">
                <div class="eye">
                    &#128065;
                </div>
                <div class="bin">
                  &#128465;
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
              &#9992;
              <p>My flight</p>
              </div>
            </td>
            <td>22-04-2021</td>
            <td>6tt350fad674035b4472d6def</td>
            <td>NKDA</td>
            <td><label>COMPLETED</label></td>
            <td>
              <div class="lastfield">
                <div class="eye">
                    &#128065;
                </div>
                <div class="bin">
                  &#128465;
                </div>
              </div>
            </td>
          </tr>
      </table>
       </div>
    </div>
  }
  



handleClick(event) {
  $(".filter-section .filter-options ul li").removeClass("selected");
  $(event.target).addClass("selected");
};

}

export default RightPanel;