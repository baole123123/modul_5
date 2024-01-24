import ReactPaginate from 'react-js-pagination';
import React, { Component } from 'react';

class Crud extends Component {
    state = {
        form: {
            name: '',
            phone: '',
            email: ''
        },
        studentList: [],
        indexSelected: -1,
        isValid: false
    };
    handleChange = (event) => {
        this.setState((state) => {
            const form = state.form
            form[event.target.name] = event.target.value
            return { form }
        }, () => this.checkInvalidForm())
    }
    handleSelect = (studentSelected, index) => {
        this.setState({
            form: JSON.parse(JSON.stringify(studentSelected)),
            indexSelected: index
        })
    }
    checkInvalidForm = () => {
        const { name, phone, email } = this.state.form
        const value = name && phone && email
        this.setState({
            isValid: value
        })
    }
    handleSubmit = () => {
        if (this.state.isValid) {
            const { form, indexSelected, studentList } = this.state;

            if (indexSelected > -1) {
                // Cập nhật thông tin sinh viên đã chọn
                const updatedList = [...studentList];
                updatedList[indexSelected] = form;

                this.setState({
                    studentList: updatedList,
                    form: { name: '', phone: '', email: '' },
                    indexSelected: -1,
                    isValid: false
                });
            } else {
                // Thêm sinh viên mới vào danh sách
                this.setState((prevState) => ({
                    studentList: [...prevState.studentList, form],
                    form: { name: '', phone: '', email: '' },
                    isValid: false
                }));
            }
        }
    };
    handleDelete = (index) => {
        this.setState((prevState) => ({
            studentList: prevState.studentList.filter((_, i) => i !== index)
        }));
    };
    render() {
        const { studentList, form } = this.state;

        return (
            <div>
                <div>
                    <h1>Học sinh</h1>
                    <div>
                        <label>Tên: </label>
                        <input name="name" value={form.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>SĐT: </label>
                        <input type="number" name="phone" value={form.phone} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input name="email" value={form.email} onChange={this.handleChange} />
                    </div>
                    <button onClick={this.handleSubmit}>Submit</button>
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th>SĐT</th>
                                <th>Email</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentList.map((student, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{student.name}</td>
                                    <td>{student.phone}</td>
                                    <td>{student.email}</td>
                                    <td>
                                        <button onClick={() => this.handleSelect(student, index)}>Edit</button>
                                        <button onClick={() => this.handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Crud;