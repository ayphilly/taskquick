import "./home.scss"
import { Arrowbtn } from "../../components/buttons/arrowbtn"
import { useHistory } from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
export const Home = () => {

    const history = useHistory();

    var navigate = () => {
        history.push('/artworks')
    }

    
    return (
        <div className="home">
            <div className="home-inner">    
                <p className="home-inner__title">
                    <FormattedMessage
                        id = "home.body"
                        defaultMessage="Introducing the world’s first luxury t-shirt printing"
                    />
                    <span>
                        <FormattedMessage
                            id = "home.slant"
                        />
                    </span>
                </p>
                <Arrowbtn
                    title = "See Available Artworks"
                    onClick={navigate}
                />
            </div>
        </div>
    )
}