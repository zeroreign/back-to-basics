import { expect } from "chai"
import { beforeEach, describe, it } from "mocha";
import { fake, SinonSpy, spy, stub } from "sinon";
import * as exampleService from "../src/example.service";
import dotenv from 'dotenv';

describe('Test external methods', () =>{
  let spyDotEnv:SinonSpy<any>;
  let spySimpleUtil:SinonSpy<any>;

  beforeEach(() => {
    spyDotEnv = spy(dotenv, 'config');
    spySimpleUtil = spy(exampleService.SimpleUtil, 'simpleUtilMethod');
  })

  afterEach(() =>{
    spyDotEnv.restore();
    spySimpleUtil.restore();
  })

  it('should have have called internal methods', () =>{
    const simpleService = new exampleService.SimpleService();
    const spyExternalMethod = spy(exampleService, 'simpleExternalMethod');

    console.log(simpleService.external());
    spyExternalMethod();
    expect(spyDotEnv.calledOnce).to.be.true;
    expect(spyExternalMethod.calledOnce).to.be.true;
  })

  it('should have called dotenv config', () => {
    const simpleService = new exampleService.SimpleService();

    simpleService.load();
    expect(spyDotEnv.calledOnce).to.be.true;
  })

  it('should have called the util method', () => {
    const simpleService = new exampleService.SimpleService();
    console.log(simpleService.callUtil());

    expect(spySimpleUtil.calledOnce).to.be.true
  })

  describe('Private Simulation', () => {
    it('should spy on private mothod', () => {
      const spyPrivate = spy(exampleService.SimpleService.prototype, <any>'simplePrivateMethod')
      const simpleService = new exampleService.SimpleService();
      simpleService.callPrivate();

      expect(spyPrivate.calledOnce).to.be.true;
    })
  })
})