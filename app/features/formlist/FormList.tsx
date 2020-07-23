import React, { useEffect, useState } from 'react';
import { ipcRenderer, shell } from 'electron';
import { Menu, Button, Row, Col } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import JF from '../../JotForm';
import Submissions from '../submissions/Submissions';

function formClick(url: string) {
  ipcRenderer.invoke('openForm', url);
}

const FormList = (props) => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedForm, setSelectedForm] = useState(0);

  function closeModal() {
    setModalVisible(false);
  }

  useEffect(() => {
    async function fetchData() {
      let result;
      if (props.folder && props.folder !== '1') {
        // eslint-disable-next-line promise/always-return
        await JF.getFolder(props.folder).then((r: any) => {
          result = r.forms;
        });
      } else {
        // eslint-disable-next-line promise/always-return
        await JF.getForms().then((r: any) => {
          result = r;
        });
      }
      setData(result);
    }

    fetchData();
  }, [props.folder]);

  function editForm(id) {
    const url = `https://www.jotform.com/build/${id}`;
    shell.openExternal(url);
  }

  return (
    <div>
      <Submissions
        visible={modalVisible}
        close={closeModal}
        formID={selectedForm}
      />
      <Menu mode="inline" className="form-wrapper" selectable={false}>
        {data.map((item) => (
          <Menu.Item key={item.id} className="form-item">
            <Row>
              <Col
                flex="auto"
                onClick={() => {
                  formClick(item.url);
                }}
              >
                {item.title}
              </Col>
              <Col flex="200px">
                <ButtonGroup>
                  <Button
                    type="default"
                    onClick={() => {
                      setSelectedForm(item.id);
                      setModalVisible(true);
                    }}
                  >
                    Submissions
                  </Button>
                  <Button
                    type="default"
                    onClick={() => {
                      editForm(item.id);
                    }}
                  >
                    Edit
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Menu.Item>
        ))}
      </Menu>
    </div>
    // <div className="list-group container">
    //   {data.map((item) => (
    //     <li key={item.id} className="list-group-item p-0 row">
    //       <button
    //         type="button"
    //         className="btn col col-sm-9 col-lg-10"
    //         onClick={() => {
    //           formClick(item.url);
    //         }}
    //       >
    //         {item.title}
    //       </button>
    //       <div className="btn-group col col-sm-3 col-lg-2" role="group">
    //         <button type="button" className="btn btn-sm btn-outline-secondary">
    //           Submissions
    //         </button>
    //         <button
    //           type="button"
    //           className="btn btn-sm btn-outline-secondary"
    //           onClick={() => {
    //             editForm(item.id);
    //           }}
    //         >
    //           Edit
    //         </button>
    //       </div>
    //     </li>
    //   ))}
    // </div>
    // <ul className="list-group">
    //   {data.map((item) => (
    //     <li
    //       key={item.id}
    //       className="list-group-item list-group-item-action"
    //       onClick={() => {
    //         formClick(item.url);
    //       }}
    //     >
    //       Cras justo odio
    //     </li>
    //   ))}
    // </ul>
  );
};

export default FormList;
