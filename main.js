class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        }
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }

    toggleCheckbox() {
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        var msg = this.state.checked ? "Checked" : "Not checked";
        return (
            <div>
                <input type="checkbox" onChange={this.toggleCheckbox} defaultChecked={this.state.checked}/>
                <p>The checkbox is {msg}</p>
            </div>
        )
    }
}

// const Coco = ({product}) => (
//     <h1 className="coco">I am in love with my {product}</h1>
// )

ReactDOM.render(
    <Checkbox />,
    document.getElementById('react-container')
)