import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// tslint:disable-next-line:no-any
export class Topic extends React.Component<RouteComponentProps<any, any, any>, any> {
    // tslint:disable-next-line:no-any
    constructor(props: any) {
        super(props);
    }

    public render() {
        const { match } = this.props;
        return (
            <div>
                <h3>{match.params.topicId}</h3>
            </div>
        );
    }
}