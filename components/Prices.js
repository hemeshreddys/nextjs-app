class Prices extends React.Component{
    state = {
        currency: 'USD'
    }
    render() {
        return(
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                    Bitcoin!!! rate for {this.props.bpi.EUR.description} 
                    <span className="badge badge-primary"> {this.props.bpi.EUR.code} </span>
                    <strong>{this.props.bpi.EUR.rate}</strong>
                    </li>
                    <li className="list-group-item">
                    Bitcoin## rate for {this.props.bpi.USD.description} 
                    <span className="badge badge-primary"> {this.props.bpi.USD.code} </span>
                    <strong>{this.props.bpi.USD.rate}</strong>
                    </li>
                    <li className="list-group-item">
                    Bitcoin@@ rate for {this.props.bpi.GBP.description} 
                    <span className="badge badge-primary"> {this.props.bpi.GBP.code} </span>
                    <strong>{this.props.bpi.GBP.rate}</strong>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Prices;