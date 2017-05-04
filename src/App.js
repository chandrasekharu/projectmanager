import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
constructor(){
  super();
  this.state={
    projects:[]
  }
}
componentWillMount(){
  this.setState({ projects:[
    {
      id:uuid.v4(),
      title:'Social app',
      category: 'Mobile Development'
    },
    {
      id:uuid.v4(),
      title:'Business website',
      category: 'web design'
    },
    {
      id:uuid.v4(),
      title:'E commerce shopping cart',
      category: 'Web Development'
    }
  ]
});
}

handleAddProject(project){
  let projects=this.state.projects;
  projects.push(project);
  this.setState({projects:projects});

}

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects}/>
      </div>

    );
  }
}

export default App;
