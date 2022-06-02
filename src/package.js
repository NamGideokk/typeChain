//node_module처럼 생각

// 타입스크립트에게 자바스크립트 파일을 확인하라고 요청함
// @ts-check

/**
 * 프로그램을 초기화 합니다.
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return true;
}

/**
 * 프로그램을 종료 합니다.
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1;
}
