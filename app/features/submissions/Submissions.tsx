import React, { useState, useEffect } from 'react';
import { Modal, Button, Table } from 'antd';
import JF from '../../JotForm';

const Submissions = (props: {
  formID: number;
  visible: boolean | undefined;
  close: ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      return JF.getFormSubmissions(props.formID).then((r: never) => {
        return setData(r);
      });
    }
    fetchData();
  }, [props]);
  const titles = [];

  Object.values(data[0]['answers']).forEach((e) => {
    titles.push(e['text']);
  });
  let i = 1;
  const dataSource = data.map((submission) => {
    const answerList: { [k: string]: any } = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const key in submission.answers) {
      if (submission.answers.hasOwnProperty(key)) {
        answerList[submission.answers[key]['name']] =
          submission.answers[key]['answer'];
      }
    }
    answerList['key'] = i++;
    return answerList;
  });

  let columns = [];

  i = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const key in dataSource[0]) {
    if (dataSource[0].hasOwnProperty(key)) {
      if (key !== 'key') {
        columns.push({ title: titles[i++], dataIndex: key, key });
      }
    }
  }

  return (
    <Modal
      visible={props.visible}
      title="Submissions"
      onOk={props.close}
      onCancel={props.close}
      footer={null}
      width="80vw"
      bodyStyle={{ height: '80vh' }}
      centered
    >
      <Table dataSource={dataSource} columns={columns} />
    </Modal>
  );
};

export default Submissions;
