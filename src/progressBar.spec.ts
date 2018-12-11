import t from 'assert';
import { progressBar } from '.';


test('prints 0.5 as 50.0%', () => {
  const actual = progressBar(0.5, { length: 30, bracket: '[]', marker: '|', filler: '-', start_num: '', end_num: ' 50.0%' })
  t.strictEqual(actual, '[-----------|----------] 50.0%')
})

test('prints 0 as 0.0%', () => {
  const actual = progressBar(0, { length: 30, bracket: '[]', marker: '|', filler: '-', start_num: '', end_num: ' 0.0%' })
  t.strictEqual(actual, '[|----------------------] 0.0%')
})

test.skip('default length is 30', () => {
  const actual = progressBar(0.5)
  t.strictEqual(actual.length, 30)
})

test.skip('options.length control the length of the overall result', () => {
  const actual = progressBar(0.5, { length: 15, bracket: '[]', marker: '|', filler: '-', start_num: '', end_num: ' 0.0%' })
  t.strictEqual(actual.length, 15)
})

test('bracket input', () => {
  const actual = progressBar(0.5, { length: 30, bracket: '()', marker: '|', filler: '-', start_num: '', end_num: ' 50.0%' })
  t.strictEqual(actual, '(-----------|----------) 50.0%')
})

test('marker', () => {
  const actual = progressBar(0.5, { length: 30, bracket: '()', marker: '|', filler: '-', start_num: '', end_num: ' 50.0%' })
  t.strictEqual(actual, '(-----------|----------) 50.0%')
})

test('marker', () => {
  const actual = progressBar(0.5, { length: 30, bracket: '()', marker: '|', filler: 'A', start_num: '', end_num: ' 50.0%' })
  t.strictEqual(actual, '(AAAAAAAAAAA|AAAAAAAAAA) 50.0%')
})

test('marker: - ', () => {
  const actual = progressBar(0.5, { length: 30, bracket: '()', marker: '=', filler: '-', start_num: '', end_num: ' 50.0%' })
  t.strictEqual(actual, '(===========-----------) 50.0%')
})

test('marker - X', () => {
  const actual = progressBar(0.5, { length: 30, bracket: '()', marker: '=', filler: 'X', start_num: '', end_num: ' 50.0%' })
  t.strictEqual(actual, '(===========XXXXXXXXXXX) 50.0%')
})
