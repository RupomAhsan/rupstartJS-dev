import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our First Test',()=>{
  it('Should pass',()=>{
    expect(true).to.equal(true);
  });
});


describe('index.html',()=>{
  it('Should say Hello World!',(done)=>{
    const index=fs.readFileSync('./src/index.html',"utf-8");
    jsdom.env(index,function(err,window){
      const h1=window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Hello Ahsan');
      done();
      window.close();
    });
  //  expect(true).to.equal(true);
  });
});
