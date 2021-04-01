import { useState, ChangeEvent, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { listsAPI } from '../../../api/listsAPI/listsAPI';
import { SessionContext } from '../../../contexts/SessionContext';

const CreateList = () => {
  const { session_id } = useContext(SessionContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    document.title = 'Create list';
  }, []);

  const handleCreateList = () => {
    if (!session_id) return;

    listsAPI
      .createList(session_id, name, description, 'en')
      .then((res) => {
        if (res.success) {
          window.location.pathname = `/list/${res.list_id}`;
        } else {
          throw new Error(res.errors[0]);
        }
      })
      .catch((error: Error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="create-list-wrapper">
      <div className="create-list-form">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
          }}
        >
          <div className="form-title">Create List Form</div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setName(event.target.value);
            }}
          />
          <br />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
              setDescription(event.target.value);
            }}
          />
          <br />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button onClick={handleCreateList}>Create List</button>
        </div>
      </div>
    </div>
  );
};

export default CreateList;
