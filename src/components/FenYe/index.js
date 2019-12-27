import React from 'react';
import { Button } from 'antd';

class FenYe extends React.Component {
  change = linkstr => {
    var link = linkstr.substring(linkstr.indexOf('page_info='), linkstr.length - 1);
    this.props.handlechange(link);
  };

  render() {
    //const Link="<https://yinyj.myshopify.com/admin/api/2019-10/products.json?limit=10&page_info=eyJsYXN0X2lkIjo0NDA1MTUxMzY3MjQwLCJsYXN0X3ZhbHVlIjoiQnVydG9uIEN1c3RvbSBGcmVlc3R5bGUgMTUxIiwiZGlyZWN0aW9uIjoibmV4dCJ9>; rel='next'"
    //const Link="<https://yinyj.myshopify.com/admin/api/2019-10/products.json?limit=10&page_info=eyJkaXJlY3Rpb24iOiJwcmV2IiwibGFzdF9pZCI6NDM4OTYyNDE4NDkwNCwibGFzdF92YWx1ZSI6IkRvZyBDYXIgU2VhdCBDb3ZlciBWaWV3IE1lc2ggV2F0ZXJwcm9vZiBQZXQgQ2FycmllciBDYXIgUmVhciBCYWNrIFNlYXQgTWF0IEhhbW1vY2sgQ3VzaGlvbiBQcm90ZWN0b3IgV2l0aCBaaXBwZXIgQW5kIFBvY2tldHMifQ>; rel='previous', <https://yinyj.myshopify.com/admin/api/2019-10/products.json?limit=10&page_info=eyJkaXJlY3Rpb24iOiJuZXh0IiwibGFzdF9pZCI6NDM4OTYyNDExOTM2OCwibGFzdF92YWx1ZSI6IldPTUVOJ1MgV2ludGVyIENvYXQgV2FybSBDcm9zcyBCb3JkZXIgQ2FzdWFsIExvbmcgSm9pbnQgQ29udHJhc3QgQ29sb3IgU3RyaXBlZCBPdmVyc2l6ZSBLbml0dGVkIFN3ZWF0ZXIgQ2FyZGlnYW4gUGF0Y2hlZCBPdXR3ZWFyIn0>; rel='next'"
    const Link = this.props.Link;
    if (Link == undefined) {
      return null;
    }
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
