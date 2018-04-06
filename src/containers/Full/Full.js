import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import './Full.css';

import Dashboard from '../../views/Dashboard/';
import ListUser from '../User/List/List';
import AddUser from '../User/Add/Add';
import ListCategory from '../Category/List/List';
import AddCategory from '../Category/Add/Add';
import ListTest from '../Test/List/List';
import AddTest from '../Test/Add/Add';
import ListQuestion from '../Question/List/List';

class Full extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="app-body">
                    <Sidebar {...this.props}/>
                    <main className="main">
                        <Breadcrumb />
                        <Container fluid>
                            <Switch>
                                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                                <Route path="/user/list" name="ListUser" component={ListUser} />
                                <Route path="/user/add" name="AddUser" component={AddUser} />
                                <Route path="/category/list" name="ListCategory" component={ListCategory} />
                                <Route path="/category/add" name="AddCategory" component={AddCategory} />
                                <Route path="/test/list" name="ListTest" component={ListTest} />
                                <Route path="/test/add" name="AddTest" component={AddTest} />
                                <Route path="/question/list" name="ListQuestion" component={ListQuestion} />
                            </Switch>
                        </Container>
                    </main>
                    <Aside />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Full;
