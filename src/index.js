import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import AppSyncConfig from './aws-exports'
import { 
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    HttpLink,
    ApolloLink,
    concat
} from '@apollo/client';

const httpLink = new HttpLink({ uri: AppSyncConfig.aws_appsync_graphqlEndpoint });
const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            'x-api-key': AppSyncConfig.aws_appsync_apiKey,
        }
    });

    return forward(operation);
});
const client = new ApolloClient({
    link: concat(authLink, httpLink),
    cache: new InMemoryCache({
        typePolicies: {
            Shelter: {
                fields: {
                    listObj: {
                        read(_, { readField }) {
                            return {[readField('id')]: readField('name')};
                        }
                    }
                }
            }
        }
    })
});

ReactDOM.render(
    <Router>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Router>
, document.getElementById("root"));
