export default class App extends Component {
  
        state = {
          people: []
        };
     
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.setState({
              people: data.people
            });
          });
      }
      
  
    render() {
      return (
        <div>
         <ul>
            {this.state.people.map(person => {
            return(
                          
                <li>{person.name}</li>
                <li>{person.craft}</li>
            )
            }}
         </ul>
        </div>
      );
    }
  }