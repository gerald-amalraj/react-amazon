import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onWeight_1 = this.onWeight_1.bind(this);
    this.onWeight_2 = this.onWeight_2.bind(this);
    this.onWeight_3 = this.onWeight_3.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      graphPath: "",
      weight_1: "",
      weight_2: "",
      weight_3: "",

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
    	graphPath: e.target.value
    });
  }
  
  onWeight_1(e) {
	    this.setState({
	    	weight_1: e.target.value
	    });
	  }
  
  onWeight_2(e) {
	    this.setState({
	    	weight_2: e.target.value
	    });
	  }
  
  onWeight_3(e) {
	    this.setState({
	    	weight_3: e.target.value
	    });
	  }
  
  saveTutorial() {
    var data = {
    		graphPath: this.state.graphPath,
    		weight_1:this.state.weight_1,
    		weight_2:this.state.weight_2,
    		weight_3:this.state.weight_3
    };
    console.log(data);
    TutorialDataService.formulate(data)
      .then(response => {
        this.setState({
        	currentTutorial: response.data,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      graphPath: "",
      weight_1: "",
      weight_2: "",
      weight_3: "",

      submitted: false
    });
  }

  render() {
	  const { currentTutorial } = this.state;
	  return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            
            <div className="list row">
          
            <div className="col-md-11">
              {currentTutorial ? (
                <div border="1">
                  <div>
                    <label>
                      <strong>Total Path between A - C :</strong>
                    </label>{" "}
                    {currentTutorial.totalPath}
                  </div>
                  <div>
                    <label>
                      <strong>A-B-C:</strong>
                    </label>{" "}
                    {currentTutorial.weight_1}
                  </div>
                  <div>
                  <label>
                    <strong>A-E-B-C-D:</strong>
                  </label>{" "}
                  {currentTutorial.weight_2}
                </div>
                <div>
                <label>
                  <strong>A-E-D:</strong>
                </label>{" "}
                {currentTutorial.weight_3}
              </div>
                </div>
              ) : (
                <div>
                  <br />
                </div>
              )}
            </div>
          </div>
            
            
            
            <button className="btn btn-success" onClick={this.newTutorial}>
              Back
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="graphPath">Graph String</label>
              <input
                type="text"
                className="form-control"
                id="graphPath"
                required
                value={this.state.graphPath}
                onChange={this.onChangeTitle}
                name="graphPath"
              />
            </div>
            <div className="form-group">  
              <label htmlFor="weight_1">Weight 1</label>
              <input
                type="text"
                className="form-control"
                id="weight_1"
                required
                value={this.state.weight_1}
                onChange={this.onWeight_1}
                name="weight_1"
              />
            </div>
            <div className="form-group">  
              <label htmlFor="weight_2">Weight 2</label>
              <input
                type="text"
                className="form-control"
                id="weight_2"
                required
                value={this.state.weight_2}
                onChange={this.onWeight_2}
                name="weight_2"
              />
            </div>
              <div className="form-group">  
              <label htmlFor="weight_3">Weight 3</label>
              <input
                type="text"
                className="form-control"
                id="weight_3"
                required
                value={this.state.weight_3}
                onChange={this.onWeight_3}
                name="weight_3"
              />
            </div>  

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
