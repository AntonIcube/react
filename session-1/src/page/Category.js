import React from 'react';
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import Home from './Homepage';
import PLPProduct from '../component/plpProduct';

export default function Category(props) {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}`} component={Home} />
            <Route path={`${path}/:categoryId`} component={CategoryList} />
        </Switch>
    )
}

function CategoryList() {
    let { categoryId } = useParams();
    return (
        <>
            <PLPProduct id={categoryId}/>
        </>
    )
}