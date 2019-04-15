export const StackTypes = {
  CARD: 'Card',
  MANAGEMENT: 'Management',
};

const addToStack = (event): Object => {
  return {
    msg: event.msg,
    data: event.data || undefined,
    type: event.type,
  };
};

export default addToStack;
