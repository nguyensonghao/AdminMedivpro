import React, {Component} from 'react';
import {
    Badge,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Dropdown
} from 'reactstrap';

class HeaderDropdown extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    dropAccnt() {
        return (
            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav>
                    <img src={'img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem header tag="div" className="text-center"><strong>Tài khoản</strong></DropdownItem>
                    <DropdownItem><i className="fa fa-user"></i> Thông tin cá nhân</DropdownItem>
                    {/* <DropdownItem divider/> */}
                    <DropdownItem><i className="fa fa-lock"></i> Đăng xuất</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }

    render() {
        const {...attributes} = this.props;
        return (
            this.dropAccnt()
        );
    }
}

export default HeaderDropdown;
