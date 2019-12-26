import React from 'react';
import { Button } from 'antd';

class FenYe extends React.Component {
  change = linkstr => {
    var link = linkstr.substring(linkstr.indexOf('page_info='), linkstr.length - 1);
    this.props.handlechange(link);
  };
  render() {
    const Link = this.props.Link;
    var linkarry = Link.split(',');
    var prelink = [];
    var nextlink = [];
    for (var i = 0; i < linkarry.length; i++) {
      if (linkarry[i].indexOf('previous') != -1) {
        prelink = linkarry[i];
      }
      if (linkarry[i].indexOf('next') != -1) {
        nextlink = linkarry[i];
      }
    }
    return (
      <div>
        <Button
          onClick={() => {
            this.change(prelink.split(';')[0]);
          }}
          disabled={prelink.length == 0 ? 'disabled' : false}
        >
          {' '}
          上一页
        </Button>
        <Button
          onClick={() => {
            this.change(nextlink.split(';')[0]);
          }}
          disabled={nextlink.length == 0 ? 'disabled' : false}
        >
          {' '}
          下一页
        </Button>
      </div>
    );
  }
}
export default FenYe;
