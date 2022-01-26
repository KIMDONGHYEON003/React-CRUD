import React, { useEffect, useState, useRef} from "react";
import axios from 'axios';
import Tr from '../component/Tr';
import Post from '../component/Post';
import Modal from '../component/Modal';


const Board = () => {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState('');
  const [modalOn, setModalOn] = useState(false);

  const nextId = useRef(11);

  //더미 데이터 호출
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setInfo(res.data))
      .catch(err => console.log(err));
  }, [] );


  const handleSave = (data) => {

    //데이터 수정하기
    if (data.id) {
      setInfo(
        info.map(row => data.id === row.id ? {
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          website: data.website,
        } : row))
    } else {
      setInfo(info => info.concat(
        {
          id: nextId.current,
          name: data.name,
          eemail: data.email,
          phone: data.phone,
          website: data.website,
        }
      )) 
      nextId.current += 1;
    }
  }

  const handleRemove = (id) => {
    setInfo(info => info.filter(item => item.id !== id));
  }

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      website: item.website
    };
    console.log(selectedData);
    setSelected(selectedData);
  };

  const handleCancel = () => {
    setModalOn(false);
  }

  const handleEditSubmit = (item) => {
    console.log(item);
    handleSave(item);
    setModalOn(false);
  }

  return (
    <div>
      <div>List</div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Website</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit}/>
      </table>
      <Post onSaveData={handleSave} />
      {modalOn && <Modal selectedData={selected} handleCancel={handleCancel} handleEditSubmit={handleEditSubmit} />}
    </div>
  )

};

export default Board;