import ErrorRepository from '../errorRepository';

const errorRepo = new ErrorRepository();

test('find known error', () => {
  const result = errorRepo.translate('id1');
  expect(result).toEqual('Error1');
});

test('find unknown error', () => {
  const result = errorRepo.translate('id4');
  expect(result).toEqual('Unknown error');
});
