import * as React from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';
import { Topic } from './Topic';

// tslint:disable-next-line:no-any
class Topics extends React.Component<RouteComponentProps<any, any, any>, any> {
    // tslint:disable-next-line:no-any
    constructor(props: any) {
        super(props);
    }

    public render() {
        const { match } = this.props;
        return (match ? (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                    </li>
                </ul>

                <Route path={`${match.path}/:topicId`} component={Topic} />
                <Route
                    exact={true}
                    path={match.path}
                    render={this.renderText}
                />
            </div>
        ) : null);
    }

    private renderText() {
        return (<h3>Please select a topic.</h3>);
    }
}

export default Topics;