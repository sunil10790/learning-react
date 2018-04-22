// class Coco extends React.Component {
//     render() {
//         return (
//             <h1 className="coco">I am in love with {this.props.amount}mg of my {this.props.product}</h1>
//         )
//     }
// }

const Coco = (props) => (
    <h1 className="coco">I am in love with my {props.product}</h1>
)

ReactDOM.render(
    <Coco product="coco" amount={16}/>,
    document.getElementById('react-container')
)