import React, { useState } from "react";

const Post = ({ onSaveData }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveData(form)
    setForm({
      name: '',
      email: '',
      phone: '',
      website: '',
    })
  }

  return (
    <>
      <div>추가하기</div>
      <form>
        <div>
          <label>
            Name
            <input required placeholder="입력하세요" type='text' name='name'
            value={form.name} onChange={handleChange}/>
          </label>
          <label>
            Email
            <input required placeholder="입력하세요" type='email' name='email'
            value={form.email} onChange={handleChange}/>
          </label>        
        </div>

        <div>
          <label>
            Phone
            <input required placeholder="입력하세요" type='text' name='phone'
            value={form.phone} onChange={handleChange}/>
          </label> 
          <label>
            Website
            <input required placeholder="입력하세요" type='text' name='website'
            value={form.website} onChange={handleChange}/>
          </label> 
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>저장</button>
        </div>
      </form>
    </>
  );
};

export default Post;