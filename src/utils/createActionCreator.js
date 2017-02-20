const createActionCreator = (type) => (payload, meta) => ({
  type,
  payload,
  meta,
});

export default createActionCreator;