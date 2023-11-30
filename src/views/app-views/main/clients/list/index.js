import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import userService from 'services/UserService';
import Loading from 'components/shared-components/Loading';
import EditProfile from './EditProfile';
import Typography from 'antd/lib/typography/Typography';



export class UserList extends Component {

	state = {
		users: [],
		userProfileVisible: false,
		selectedUser: null,
		isLoading: true
	}
	componentDidMount() {
		userService
			.fetchAll()
			.then(response => this.setState({ users: response}))
			.catch(error => {
				console.log(error)
			})
			.finally(() => {
				this.setState({ isLoading: false})
			})
	}		
	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};
	
	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    });
	}

	render() {
		const { users, userProfileVisible, selectedUser, isLoading } = this.state;

		const tableColumns = [
      {
        title: "Client",
        dataIndex: "name",
        render: (_, record) => (
          <div className="d-flex" style={{flexDirection:"column"}}>
			<Typography>{record.name}</Typography>
            <Typography type={"secondary"}>{record.email}</Typography>
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase()
            b = b.name.toLowerCase()
            return a > b ? -1 : b > a ? 1 : 0
          },
        },
      },
      {
        title: "Company",
        dataIndex: "company",
        render: (company) => <span>{company.name}</span>,
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase().length
            b = b.name.toLowerCase().length
            return a > b ? -1 : b > a ? 1 : 0
          },
        },
      },
      {
        title: "Website",
        dataIndex: "website",
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase().length
            b = b.name.toLowerCase().length
            return a > b ? -1 : b > a ? 1 : 0
          },
        },
      },
      {
        title: "Tags",
        dataIndex: "company",
        render: (company) =>
          company.bs.split(" ").map((tag) => (
            <Tag className="text-capitalize" key={tag}>
              {tag}
            </Tag>
          )),
      },
      {
        title: "",
        dataIndex: "actions",
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="View">
              <Button
                type="primary"
                className="mr-2"
                icon={<EyeOutlined />}
                onClick={() => {
                  this.showUserProfile(elm)
                }}
                size="small"
              />
            </Tooltip>
          </div>
        ),
      },
    ]
		return (
      <Card bodyStyle={{ padding: "0px" }}>
        {userProfileVisible ? (
          <EditProfile
            user={selectedUser}
            close={() => this.closeUserProfile()}
          />
        ) : (
          <Table
            columns={tableColumns}
            dataSource={users}
            rowKey="id"
            loading={{ indicator: <Loading />, spinning: isLoading }}
          />
        )}
      </Card>
    )
	}
}

export default UserList
