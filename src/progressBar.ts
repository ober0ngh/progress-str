export function progressBar(currentValue: number, options: { length: number, bracket: string, marker: string, filler: string, start_num: string, end_num: string } = { length: 30, bracket: '[]', marker: '|', filler: '-', start_num: '', end_num: '' }) {

import { CurrentValueOutOfRange } from './errors';

export interface Options {
  length: number
}

export function progressBar(currentValue: number, options?: Options)
export function progressBar(currentValue: number, maxValue: number, options?: Options)
export function progressBar(currentValue: number, maxOrOption?: any, options?: any) {
  if (options) {
    return progressBarWithMax(currentValue, maxOrOption, options)
  }

  return progressBarPercent(currentValue, maxOrOption)
}

function progressBarWithMax(currentValue: number, maxValue: number, options: Options) {

}

function progressBarPercent(currentValue: number, options: Options = { length: 30 }) {
  if (currentValue > 1) throw new CurrentValueOutOfRange(currentValue)

  const percent = toPercentage(currentValue, 1)
  const spaceLength = 1
  let bar = '';
  switch (options.marker) {
    case '|' : {
      bar = `${options.bracket.charAt(0)}${toBar_pipe(currentValue, options.length - percent.length - spaceLength, options.filler)}${options.bracket.charAt(1)}`;
      break;
    }
    case '=' : {
      bar = `${options.bracket.charAt(0)}${toBar_equal(currentValue, options.length - percent.length - spaceLength, options.filler)}${options.bracket.charAt(1)}`;
      break;
    }
  }
  return `${options.start_num}${bar}${options.end_num}`
}

function toBar_pipe(percent: number, length: number, filler: string) {
  const bracketLength = 1
  const barInsideLength = length - bracketLength * 2
  const location = Math.round(percent * barInsideLength)
  const bar = new Array(barInsideLength).fill(filler)
  bar[location] = '|'
  return `${bar.join('')}`
}

function toBar_equal(percent: number, length: number, filler: string) {
  const bracketLength = 1
  const barInsideLength = length - bracketLength * 2
  const location = Math.round(percent * barInsideLength)
  let bar = new Array(barInsideLength).fill(filler)
  bar.fill('=', 0, location)
  // bar[location] = '|'
  return `${bar.join('')}`
}

function toPercentage(value: number, fractionDigits: number) {
  return `${(value * 100).toFixed(fractionDigits)}%`
}

class PrograssBar {
  constructor(public length: number, public bracket: string, public marker: string, public filler: string, public startNum: string, public endNum: string) {};
}
