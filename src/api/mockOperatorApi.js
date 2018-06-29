import delay from './delay';


const opearators = [
  {
    id: 'mts',
    name: 'МТС'
  },
  {
    id: 'beeline',
    name: 'Билайн'
  },
  {
    id: 'megafon',
    name: 'Мегафон'
  }
];

class OperatorApi {
  static getAllOperators() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...opearators]);
      }, delay);
    });
  }
}

export default OperatorApi;
