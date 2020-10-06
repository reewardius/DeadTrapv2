import React from "react";
import { withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  base:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily : "Nunito Sans",
    color: "green",
    fontSize: "45px",
  },
  color:{
    color: "green",
  }

});

class FetchInfo extends React.Component {
  
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://deadtrap-api.herokuapp.com/" + this.props.links;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data, loading: false });
  }

  render() {

    const { classes } = this.props;

    if (this.state.loading) {
      return <div className={classes.base}>loading...</div>;
    }

    if (!this.state.person) {
      return <div className={classes.base}>didn't get a person</div>;
    }

    return (
      <div className={classes.color}>
          <h3>[+] Local Scan Results</h3>
            <div><h5>International Number : {this.state.person.basic.intl}</h5></div>
            <div><h5>Local Number : {this.state.person.basic.local}</h5></div>
            <div><h5>Country Code : {this.state.person.basic.cc}</h5></div>
            <div><h5>Location : {this.state.person.basic.location}</h5></div>
            <div><h5>Carrier : {this.state.person.basic.carrier}</h5></div>
            <div><h5>TimeZone : {this.state.person.basic.timezone}</h5></div>
          <h3>[+] Numverify Scan Results</h3>
            <div><h5>Local Number : {this.state.person.numverify.local_format}</h5></div>
            <div><h5>International Number : {this.state.person.numverify.intl_format}</h5></div>
            <div><h5>Country Code : {this.state.person.numverify.country_code}</h5></div>
            <div><h5>Country : {this.state.person.numverify.country_name}</h5></div>
            <div><h5>Location : {this.state.person.numverify.location}</h5></div>
            <div><h5>Carrier : {this.state.person.numverify.carrier}</h5></div>
            <div><h5>LineType : {this.state.person.numverify.line_type}</h5></div>
      </div>
    );
  }
}
export default withStyles(styles)(FetchInfo);