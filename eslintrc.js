module.exports = {
  extends: 'airbnb/legacy',
  globals : {
    define : false,
    requirejs : false
  },
  rules : {
    strict : [2, 'function'],
    'no-multi-spaces' : [2, { exceptions: { VariableDeclarator: true }}],
    'no-trailing-spaces' : [2, { skipBlankLines: true }],
    'func-names' : 0
  },
};