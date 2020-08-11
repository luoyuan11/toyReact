import { ToyReact, Component } from './ToyReact.js'

class showComponent extends Component {
    render() {
        return (
            <div>
                <span>my</span>
                <span>grils</span>
                <span>{this.children}</span>
            </div>
        )
    }
}
let a =(
    <showComponent name='las' id='haha' class="hehe">
        <div>嘿，女孩</div>
    </showComponent>
)

ToyReact.render(a,document.body)