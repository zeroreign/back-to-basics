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

  callPrivate(): string {
    return this.simplePrivateMethod();
  }

  private simplePrivateMethod(): string {
    return 'This is a private message';
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