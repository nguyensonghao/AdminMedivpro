import React, { Component } from 'react';
import { Badge, Row, Col, Card, CardHeader, CardBody, Table, Pagination, PaginationItem, PaginationLink, ButtonGroup, Button } from 'reactstrap';

export default class ListQuestion extends Component {
    render() {
        return (
            <div id="list-question-page" className="animated fadeIn">
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Danh sách người dùng
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>NickName</th>
                                            <th>Họ tên</th>
                                            <th>Email</th>
                                            <th>Ngày tạo</th>
                                            <th className="center">Trạng thái</th>
                                            <th className="center">Xếp hạng</th>
                                            <th className="center">Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>CrusyBoy</td>
                                            <td>Nguyễn Song Hào</td>
                                            <td>nguyensonghao974@gmail.com</td>
                                            <td>2012/01/01</td>
                                            <td className="center">
                                                <Badge color="success">Active</Badge>
                                            </td>
                                            <td className="center">
                                                <Badge color="success">1</Badge>
                                            </td>
                                            <td className="center">
                                                <ButtonGroup>
                                                    <Button color="danger">Xóa</Button>
                                                    <Button color="info">Chi tiết</Button>
                                                    <Button color="primary">Block</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>CrusyBoy</td>
                                            <td>Nguyễn Song Hào</td>
                                            <td>nguyensonghao974@gmail.com</td>
                                            <td>2012/01/01</td>
                                            <td className="center">
                                                <Badge color="success">Active</Badge>
                                            </td>
                                            <td className="center">
                                                <Badge color="success">1</Badge>
                                            </td>
                                            <td className="center">
                                                <ButtonGroup>
                                                    <Button color="danger">Xóa</Button>
                                                    <Button color="info">Chi tiết</Button>
                                                    <Button color="primary">Block</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>CrusyBoy</td>
                                            <td>Nguyễn Song Hào</td>
                                            <td>nguyensonghao974@gmail.com</td>
                                            <td>2012/01/01</td>
                                            <td className="center">
                                                <Badge color="success">Active</Badge>
                                            </td>
                                            <td className="center">
                                                <Badge color="success">2</Badge>
                                            </td>
                                            <td className="center">
                                                <ButtonGroup>
                                                    <Button color="danger">Xóa</Button>
                                                    <Button color="info">Chi tiết</Button>
                                                    <Button color="primary">Block</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Pagination>
                                    <PaginationItem>
                                        <PaginationLink previous href="#"></PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">4</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next href="#"></PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
