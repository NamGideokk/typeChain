// package.js의 declaration file (정의 파일)

interface Config {
  url: string;
}

declare module "package" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
