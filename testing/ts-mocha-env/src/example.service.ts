import { config } from "dotenv";

export class SimpleService  {
  external (): string {
    const methodCalled = simpleExternalMethod();
    config();
    return `Invoke Called ${methodCalled}`;
  }

  load (): void {
    config();
  }

  callUtil(): string {
    return SimpleUtil.simpleUtilMethod();
  }
}

export function simpleExternalMethod() {
  return 'This is single declared method'
}

export class SimpleUtil {
  static simpleUtilMethod(): string {
    return 'This is a simple util method'
  }
}