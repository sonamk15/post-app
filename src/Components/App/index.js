import { Provider } from 'react-redux';
import './index.css';
import Routing from "../../Routing/index";
import Header from "../Header";
import ReduxStore from "../../Store";
const store = ReduxStore();

function App() {
    return (
        <Provider store={store}>
            <Header/>
            <Routing/>
        </Provider>
    )
}

export default App;