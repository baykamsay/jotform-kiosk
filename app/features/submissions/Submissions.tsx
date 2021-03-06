/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/dot-notation */
import React, { useState, useEffect } from 'react';
import { Modal, Table } from 'antd';
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
    if (props.formID !== 0) {
      fetchData();
    }
  }, [props]);

  const columns = [];
  let dataSource;
  if (data.length !== 0) {
    const titles: string[] = [];

    Object.values(data[0]['answers']).forEach((e: any) => {
      titles.push(e['text']);
    });
    let i = 1;
    dataSource = data.map((submission: { answers: [] }) => {
      const answerList: { [k: string]: any } = {};

      // eslint-disable-next-line no-restricted-syntax
      for (const key in submission.answers) {
        if (submission.answers.hasOwnProperty(key)) {
          if (typeof submission.answers[key]['answer'] === 'object') {
            const arr = Object.values(submission.answers[key]['answer']);
            answerList[
              submission.answers[key]['name']
            ] = arr.toString().replace(/,/g, '\t');
          } else {
            answerList[submission.answers[key]['name']] =
              submission.answers[key]['answer'];
          }
        }
      }
      answerList['key'] = i++;
      return answerList;
    });

    i = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const key in dataSource[0]) {
      if (dataSource[0].hasOwnProperty(key)) {
        if (key !== 'key') {
          columns.push({ title: titles[i++], dataIndex: key, key });
        }
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
      <Table dataSource={dataSource} columns={columns} bordered />
    </Modal>
  );
};

export default Submissions;
